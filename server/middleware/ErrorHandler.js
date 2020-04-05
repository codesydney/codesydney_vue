const { NotFoundError } = require('../errors')

const ErrorHandler = () => (error, req, res, next) => {
  const buildErrorItem = (err, statusCode) => {
    return res.status(statusCode).json({
      msg: error.message,
    })
  }

  switch (Object.getPrototypeOf(error).constructor) {
    case NotFoundError:
      return buildErrorItem(error, 404)
    default:
      return buildErrorItem(error, 500)
  }
}

module.exports = ErrorHandler
