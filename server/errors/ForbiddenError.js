const ForbiddenError = function ForbiddenError(message) {
    if (!new.target) {
      return new ForbiddenError(message)
    }
  
    this.name = this.constructor.name
    this.message = message
    Error.captureStackTrace(this, this.constructor)
  }
  
  module.exports = ForbiddenError
  require('util').inherits(module.exports, Error)