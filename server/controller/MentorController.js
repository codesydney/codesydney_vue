const catchAsync = require('../utils/catchAsync')
const Mentor = require('../model/Mentor')

const MentorController = () => {
  const createMentor = catchAsync(async (req, res, next) => {
    const mentor = await Mentor.create(req.body)

    res.status(201).json({
      status: 'SUCCESS',
      data: {
        mentor,
      },
    })
  })

  const getMentors = async (req, res, next) => {
    try {
      const mentors = await Mentor.find()
      res.status(200).json({
        status: 'SUCCESS',
        data: {
          mentors,
        },
      })
    } catch (error) {
      res.status(500).json({
        status: 'FAIL',
        message: error.message,
      })
    }
  }

  return { createMentor, getMentors }
}

module.exports = MentorController
