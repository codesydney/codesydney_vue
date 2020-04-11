const constants = {
  httpStatus: {
    ok: 200,
    created: 201,
    noContent: 204,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    unprocessableEntity: 422,
    internalServerError: 500,
  },
  result: {
    fail: 'FAIL',
    success: 'SUCCESS',
  },
  s3: {
    bucketName: 'codesydney-website',
    folder: {
      MENTOR: 'mentor'
    }
  }
}

module.exports = constants
