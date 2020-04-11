const {s3} = require('../config/s3')
const constant = require('../constant')

module.exports.uploadS3 = (fileBuffer, fileName, folder = '') => {
    return s3.upload({
        Bucket: constant.s3.bucketName,
        Key: `${folder}/${fileName}`,
        Body: fileBuffer
    }).promise()
}