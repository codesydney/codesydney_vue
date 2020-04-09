const path = require('path')
const resHandler = require('../utils/resHandler')
const Mentor = require('../model/Mentor')
const constants = require('../constant')
const {resFormatter} = require('../utils/resFormatter')
const {UnprocessableRequestException, FileUploadFailedException, RecordWithIdNotFoundException} = require('../errors')

const MentorController = () => {
  const createMentor = resHandler(async (req) => {

    const image = req.files && req.files.image && req.files.image || null
    const fileType = image ? image.mimetype.split('/')[0] : null

    if(req.files && !image) throw new UnprocessableRequestException('mentor image not provided in "image" attribute')
    if(image && (fileType !== 'image')) throw new UnprocessableRequestException('File is not acceptable, must be image')
    
    const mentor = new Mentor({...req.body, photo: image ? true : false})
 
    let taskArray = [
      await mentor.save()
    ]

    image && taskArray.push(
      new Promise((resolve, reject) => {
        image.mv(path.join(__dirname, `../mentor-images/${mentor._id}.png`), (err) => {
          if(err) reject(new FileUploadFailedException())
          resolve()
        })
      })
    )
      
    const [ savedMentor ] = await Promise.all(taskArray)

    return resFormatter({
      status: constants.result.success,
      data: {
        mentor: savedMentor,
      }
    }, constants.httpStatus.created)
  })

  const getMentors = resHandler(async () => {
    const mentors = await Mentor.find()

    return resFormatter({
      status: constants.result.success,
      data: {
        mentors,
      }
    })
  })

  const getMentor = resHandler(async (req) => {
    const mentor = await Mentor.findById(req.params.mentorId)

    if(!mentor) throw new RecordWithIdNotFoundException()

    return resFormatter({
      status: constants.result.success,
      data: {
        mentor
      }
    })
  })

  const updateMentor = resHandler(async (req) => {
    const mentor = await Mentor.findByIdAndUpdate(
      req.params.mentorId,
      req.body,
      { new: true }
    )
    if(!mentor) throw new RecordWithIdNotFoundException()

    return resFormatter({
      status: constants.result.success,
      data: {
        mentor
      }
    })
  })

  const deleteMentor = resHandler(async (req) => {
    const mentor = await Mentor.findByIdAndRemove(req.params.mentorId)
    if (!mentor) throw new RecordWithIdNotFoundException()

    return resFormatter({
      status: constants.result.success,
      data: null
    }, constants.httpStatus.noContent)
  })

  return { 
    createMentor, 
    getMentors, 
    getMentor, 
    deleteMentor, 
    updateMentor
  }
}

module.exports = MentorController
