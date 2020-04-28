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
class ForbiddenErrorException extends Error{
    code=httpStatus.forbidden
    constructor(message = 'forbidden error'){
        super()
        this.message = message
    }
}
class MalformattedErrorException extends Error{
    code=httpStatus.badRequest
    constructor(message = 'malformatted error'){
        super()
        this.message = message
    }
}
class UnauthorizedErrorException extends Error{
    code=httpStatus.unauthorized
    constructor(message = 'unauthorized error'){
        super()
        this.message = message
    }
}

module.exports = {
    UnprocessableRequestException,
    FileUploadFailedException,
    RecordWithIdNotFoundException,
    ForbiddenErrorException,
    MalformattedErrorException,
    UnauthorizedErrorException
}