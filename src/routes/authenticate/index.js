const { LoginUser } = require('./login')
const PATH = '/authenticate'

module.exports.LoginRoutes = (router) => {
  router.route(`${PATH}/login`).post(LoginUser)
}
