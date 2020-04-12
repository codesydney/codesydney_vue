const { UnprocessableError, PreconditionError } = require('../errors')

const paginateRes = (model) => {
    return async (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        
        if(!page || !limit){
          return next(PreconditionError('bad request'))
        }
    
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const totalDocs = await model.countDocuments().exec()

        if(endIndex - limit > totalDocs ){
          return next(PreconditionError('query exceeds records'))
        }
    
        const results = {
            total: totalDocs
        }
    
        if (endIndex < totalDocs) {
          results.next = {
            page: page + 1,
            limit: limit
          }
        }
        
        if (startIndex > 0) {
          results.previous = {
            page: page - 1,
            limit: limit
          }
        }
        try {
          results.results = await model.find().limit(limit).skip(startIndex).exec()
          res.paginatedResults = results
          next()
        } catch (e) {
          return UnprocessableError(e.message)
        }
      }
}

module.exports = paginateRes