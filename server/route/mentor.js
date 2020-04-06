const express = require('express')
const MentorController = require('../controller/MentorController')

const router = express.Router()
const mentorController = MentorController()

router
  .route('/')
  .post(mentorController.createMentor)
  .get(mentorController.getMentors)

router
  .route('/:mentorId')
  .get(mentorController.getMentor)
  .delete(mentorController.deleteMentor)
  .put(mentorController.updateMentor)

module.exports = router
