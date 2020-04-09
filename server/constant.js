const constants = {
  httpStatus: {
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    internalServerError: 500,
    conflict: 409,
    unprocessableEntity: 422
  },
  result: {
    fail: 'FAIL',
    success: 'SUCCESS',
  },
}

module.exports = constants
