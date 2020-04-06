const UnauthorizedError = function UnauthorizedError(message) {
    if (!new.target) {
      return new UnauthorizedError(message)
    }
  
    this.name = this.constructor.name
    this.message = message
    Error.captureStackTrace(this, this.constructor)
  }
  
  module.exports = UnauthorizedError
  require('util').inherits(module.exports, Error)