const Mentor = require('../models/Mentor')

const MentorController = () => {
  const createMentor = async (req, res, next) => {
    try {
      const mentor = await Mentor.create(req.body)

      res.status(201).json({
        status: 'success',
        data: {
          mentor,
        },
      })
    } catch (err) {
      res.status(500).json({
        status: 'failed',
        message: err.message,
      })
    }
  }

  const getMentors = (req, res, next) => {
    console.log('GET ALL MENTORS')
  }

  return { createMentor, getMentors }
}

module.exports = MentorController
