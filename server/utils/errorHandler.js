module.exports.errorHandler = (err, res) => {
    const errCode = err['code'] && err['code'] >= 100 && err['code'] < 600 && err['code'] || 500
    res.status(errCode).send({ message: err.message || 'bad request'})
}