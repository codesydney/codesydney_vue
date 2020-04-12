const UnprocessableError = function UnprocessableError(message) {
    if (!new.target) {
      return new UnprocessableError(message)
    }
  
    this.name = this.constructor.name
    this.message = message
    Error.captureStackTrace(this, this.constructor)
  }
  
  module.exports = UnprocessableError
  require('util').inherits(module.exports, Error)