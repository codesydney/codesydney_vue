const MentorController = () => {
  const createMentor = (req, res, next) => {
    console.log('MENTOR POST')
  }

  const getMentors = (req, res, next) => {
    console.log('GET ALL MENTORS')
  }

  return { createMentor, getMentors}
}

module.exports = MentorController