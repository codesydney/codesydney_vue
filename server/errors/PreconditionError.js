const PreconditionError = function PreconditionError(message) {
    if (!new.target) {
      return new PreconditionError(message)
    }
  
    this.name = this.constructor.name
    this.message = message
    Error.captureStackTrace(this, this.constructor)
  }
  
  module.exports = PreconditionError
  require('util').inherits(module.exports, Error)