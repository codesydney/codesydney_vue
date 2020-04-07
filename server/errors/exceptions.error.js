class UnprocessableRequestException extends Error{
    code=422
    constructor(message = 'unprocessable request body'){
        super()
        this.message = message
    }
}
class FileUploadFailedException extends Error{
    code=409
    constructor(message='file upload failed'){
        super()
        this.message = message
    }
}
class RecordWithIdNotFoundException extends Error{
    code=404
    message='record with such id not found'
}

module.exports = {
    UnprocessableRequestException,
    FileUploadFailedException,
    RecordWithIdNotFoundException
}