const express = require('express')
const MentorController = require('../controller/MentorController')

const router = express.Router()

router
  .route('/')
  .post(MentorController().createMentor)
  .get(MentorController().getMentors)

module.exports = router
