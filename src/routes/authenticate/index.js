const { SchemaValidator } = require('../../middlewares')
const { LoginUser } = require('./login')
const { RegisterAdmin } = require('./register')
const { AdminSchema } = require('./schema')
const PATH = '/authenticate'

module.exports.LoginRoutes = (router) => {
  router.route(`${PATH}/login`).post(LoginUser)
  router.route(`${PATH}/register`).post([SchemaValidator(AdminSchema)], RegisterAdmin)
}
