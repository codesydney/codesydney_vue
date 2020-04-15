const path = require('path')
const catchAsync = require('../utils/catchAsync')
const Mentor = require('../model/Mentor')
const constants = require('../constant')
const {uploadS3} = require('../utils/uploadS3')
const {isObjectId} = require('../utils/utils')
const {UnprocessableRequestException, RecordWithIdNotFoundException, MalformattedErrorException} = require('../errors')

const MentorController = () => {
  const createMentor = catchAsync(async (req, res) => {

    const image = req.files && req.files.image && req.files.image || null
    const fileType = image ? image.mimetype.split('/')[0] : null

    if(req.files && !image) throw new UnprocessableRequestException('mentor image not provided in "image" attribute')
    if(image && (fileType !== 'image')) throw new UnprocessableRequestException('File is not acceptable, must be image')

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
    const id = req.params.mentorId
    if(!isObjectId(id)) throw new MalformattedErrorException('invalid ID')

    const mentor = await Mentor.findById(id)

    if (!mentor) throw new RecordWithIdNotFoundException()

    res.status(constants.httpStatus.ok).json({
      status: constants.result.success,
      data: {
        mentor,
      },
    })
  })

  const updateMentor = catchAsync(async (req, res, next) => {
    const id = req.params.mentorId
    if(!isObjectId(id)) throw new MalformattedErrorException('invalid ID')

    const mentor = await Mentor.findByIdAndUpdate(id,req.body,{ new: true })

    if (!mentor) throw new RecordWithIdNotFoundException()

    res.status(constants.httpStatus.ok).json({
      status: constants.result.success,
      data: {
        mentor,
      },
    })
  })

  const deleteMentor = catchAsync(async (req, res, next) => {
    const id = req.params.mentorId
    if(!isObjectId(id)) throw new MalformattedErrorException('invalid ID')

    const mentor = await Mentor.findByIdAndRemove(id)
    if (!mentor) throw new RecordWithIdNotFoundException()

    res.status(constants.httpStatus.noContent).json({
      status: constants.result.success,
      data: null
    });
  })

  return { createMentor, getMentors, getMentor, deleteMentor, updateMentor }
}

module.exports = MentorController
