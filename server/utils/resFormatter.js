module.exports.resFormatter = (data, statusCode = 200) => ({
    code: statusCode,
    payload: data
})