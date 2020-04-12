const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const MentorSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
)

MentorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

MentorSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Mentor', MentorSchema)
