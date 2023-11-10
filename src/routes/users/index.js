const { SchemaValidator } = require('../../middlewares')
const { ListUsers } = require('./list')
const { UserSchema } = require('./schema')
const { CreateUser } = require('./create')

const PATH = '/users'

module.exports.UsersRoutes = (router) => {
  router
    .route(`${PATH}`)
    .get([], ListUsers)
    .post([SchemaValidator(UserSchema)], CreateUser)
}
