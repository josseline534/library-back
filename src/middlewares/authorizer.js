const Boom = require('@hapi/boom')
const AdminService = require('../services/Admin')
// const { AuthorizerController } = require('../controller/AuthorizerController')

module.exports.AuthorizerToken = async (req, res, next) => {
  const { authorization } = req.headers
  try {
    const token = authorization
    if (!token) {
      next(Boom.unauthorized())
    }
    const adminService = new AdminService()
    req.user = await adminService.verifyToken(token)
    next()
  } catch (error) {
    next(error)
  }
}
