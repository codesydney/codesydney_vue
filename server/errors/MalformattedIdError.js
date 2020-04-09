const MalformattedIdError = function MalformattedIdError(message) {
    if (!new.target) {
      return new MalformattedIdError(message)
    }
  
    this.name = this.constructor.name
    this.message = message
    Error.captureStackTrace(this, this.constructor)
  }
  
  module.exports = MalformattedIdError
  require('util').inherits(module.exports, Error) 