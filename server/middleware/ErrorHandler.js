const { NotFoundError, PreconditionError,UnauthorizedError, ForbiddenError, MalformattedIdError, UnprocessableError } = require('../errors')
const constants = require('../constant')

const ErrorHandler = () => (error, req, res, next) => {
  const buildErrorItem = (err, statusCode) => {
    return res.status(statusCode).json({
      msg: error.message,
    })
  }

  switch (Object.getPrototypeOf(error).constructor) {
    case NotFoundError:
      return buildErrorItem(error, constants.httpStatus.notFound)
    case PreconditionError:
      return buildErrorItem(error, constants.httpStatus.badRequest)
    case UnauthorizedError:
      return buildErrorItem(error, constants.httpStatus.unauthorized)
    case ForbiddenError:
      return buildErrorItem(error, constants.httpStatus.forbidden)
    case MalformattedIdError:
      return buildErrorItem(error, constants.httpStatus.badRequest)
    case UnprocessableError:
      return buildErrorItem(error, constants.httpStatus.unprocessableEntity)
    default:
      return buildErrorItem(error, constants.httpStatus.internalServerError)
  }
}

module.exports = ErrorHandler
