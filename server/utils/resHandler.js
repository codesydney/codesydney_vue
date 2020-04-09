const {errorHandler} = require('./errorHandler')

const resHandler = (fn) => {
  return async (req, res, next) => {
    try{
      const response = await fn(req, res, next)
      res.status(response.code).json(response.payload)
    }
    catch(e){
      errorHandler(e, res)
    }
  }
}

module.exports = resHandler