const mongoose = require('mongoose')

const MentorSchema = new mongoose.Schema({
  photo: Boolean,
  fullName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Mentor', MentorSchema)
