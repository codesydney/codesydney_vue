const express = require('express')
const MentorController = require('../controller/MentorController')

const router = express.Router()

router
  .route('/')
  .post(MentorController().createMentor)
  .get(MentorController().getMentors)

// Create a route to get a single mentor

module.exports = router
