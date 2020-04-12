const AWS = require('aws-sdk')
const {accessKeyId, secretAccessKey} = require('./config')

module.exports.s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey
})