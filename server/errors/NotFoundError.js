const NotFoundError = function NotFoundError(message) {
  if (!new.target) {
    return new NotFoundError(message)
  }

  this.name = this.constructor.name
  this.message = message
  Error.captureStackTrace(this, this.constructor)
}

module.exports = NotFoundError
require('util').inherits(module.exports, Error)
