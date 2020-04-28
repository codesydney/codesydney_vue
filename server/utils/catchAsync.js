const {errorHandler} = require('./errorHandler')

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(e => errorHandler(e, res))
  }
}

module.exports = catchAsync
