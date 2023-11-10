const Boom = require('@hapi/boom')
// const { AuthorizerController } = require('../controller/AuthorizerController')

module.exports.AuthorizerToken = async (req, res, next) => {
  const { authorization } = req.headers
  try {
    const token = authorization
    if (!token) {
      next(Boom.unauthorized())
    }
    // req.user = await AuthorizerController.verifyToken(token)
    next()
  } catch (error) {
    next(error)
  }
}
