const {Types} = require('mongoose')

module.exports.isObjectId = (id) => Types.ObjectId.isValid(id)