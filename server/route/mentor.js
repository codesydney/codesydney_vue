const express = require('express')
const { mentorController } = require('../controller')
const router = express.Router()

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
