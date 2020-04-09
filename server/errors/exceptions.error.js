const {httpStatus} = require('../constant')

class UnprocessableRequestException extends Error{
    code=httpStatus.unprocessableEntity
    constructor(message = 'unprocessable request body'){
        super()
        this.message = message
    }
}
class FileUploadFailedException extends Error{
    code=httpStatus.conflict
    constructor(message='file upload failed'){
        super()
        this.message = message
    }
}
class RecordWithIdNotFoundException extends Error{
    code=httpStatus.notFound
    message='record with such id not found'
}

module.exports = {
    UnprocessableRequestException,
    FileUploadFailedException,
    RecordWithIdNotFoundException
}