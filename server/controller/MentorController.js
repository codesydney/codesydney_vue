const catchAsync = require('../utils/catchAsync')
const Mentor = require('../model/Mentor')
const { NotFoundError, MalformattedIdError } = require('../errors')
const constants = require('../constant')


const MentorController = () => {
  const createMentor = catchAsync(async (req, res, next) => {
    const mentor = await Mentor.create(req.body)

    res.status(constants.httpStatus.created).json({
      status: constants.result.success,
      data: {
        mentor,
      },
    })
  })

  const getMentors = catchAsync(async (req, res, next) => {
    const mentors = await Mentor.find()

    res.status(constants.httpStatus.ok).json({
      status: constants.result.success,
      data: {
        mentors,
      },
    })
  })

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
