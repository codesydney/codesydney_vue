const express = require('express')
const { mentorController } = require('../controller')
const paginateRes = require('../utils/paginateRes')
const Mentor = require('../model/Mentor')
const router = express.Router()

router
  .route('/')
  .post(mentorController.createMentor)
  .get(paginateRes(Mentor),mentorController.getMentors)

router
  .route('/:mentorId')
  .get(mentorController.getMentor)
  .delete(mentorController.deleteMentor)
  .put(mentorController.updateMentor)

module.exports = router
