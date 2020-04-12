const path = require('path')
const catchAsync = require('../utils/catchAsync')
const Mentor = require('../model/Mentor')
const { NotFoundError, MalformattedIdError, UnprocessableError, ForbiddenError, PreconditionError } = require('../errors')
const constants = require('../constant')
const {uploadS3} = require('../utils/uploadS3')


const MentorController = () => {
  const createMentor = catchAsync(async (req, res, next) => {

    const image = req.files && req.files.image && req.files.image || null
    const fileType = image ? image.mimetype.split('/')[0] : null

    if(req.files && !image) next(UnprocessableError('mentor image not provided in "image" attribute'))
    if(image && (fileType !== 'image')) next(UnprocessableError('File is not acceptable, must be image'))

    const mentor = new Mentor({...req.body, photo: image ? true : false})
 
    let taskArray = [
      await mentor.save()
    ]
    image && taskArray.push(
      await uploadS3(image.data, `${mentor._id}.png`, constants.s3.folder.MENTOR)
    )

    const [ savedMentor, s3Res ] = await Promise.all(taskArray)

    res.status(constants.httpStatus.created).json({
      status: constants.result.success,
      data: {
        mentor: savedMentor,
      },
    })
  })

  const getMentors = catchAsync(
    
    async (req, res, next) => {
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)
      const sort =  req.query.sort || 'fullName'

      if(!page || !limit) {
        const mentors = await Mentor.find({})
        return res.status(constants.httpStatus.ok).json({
          status: constants.result.success,
          data: {
            mentors,
          },
        })
      }

      const myCustomLabels = {
        docs: 'mentors'
      }

      const options = {
        page,
        limit,
        sort,
        customLabels: myCustomLabels
      }

     Mentor.paginate({}, options, function(error, result) {
        if(result){
          
          res.status(constants.httpStatus.ok)
          .json({
            status: constants.result.success,
            data: result
          })
        }
        if(error){
          next(error)
        }
      })
  }
  )

  const getMentor = catchAsync(async (req, res, next) => {

    try{
      const mentor = await Mentor.findById(req.params.mentorId)

      if (!mentor) {
        return next(NotFoundError('No mentor with this ID'))
      }

      res.status(constants.httpStatus.ok).json({
        status: constants.result.success,
        data: {
          mentor,
        },
      })
   }
    catch{
      return next(MalformattedIdError('Malformatted ID'))

   } 
  })

  const updateMentor = catchAsync(async (req, res, next) => {

    try{
      const mentor = await Mentor.findByIdAndUpdate(
        req.params.mentorId,
        req.body,
        { new: true }
      )
      if (!mentor) {
        return next(NotFoundError('No mentor with this ID'))
      }
      res.status(constants.httpStatus.ok).json({
        status: constants.result.success,
        data: {
          mentor,
        },
      })

    }
    catch{
      return next(MalformattedIdError('Malformatted ID'))
    }

  })

  const deleteMentor = catchAsync(async (req, res, next) => {
    const mentor = await Mentor.findByIdAndRemove(req.params.mentorId)

    if (!mentor) {
      return next(NotFoundError('No mentor with this ID'))
    }
    res.status(constants.httpStatus.noContent).json({
      status: constants.result.success,
      data: null
    });
  })

  return { createMentor, getMentors, getMentor, deleteMentor, updateMentor }
}

module.exports = MentorController
