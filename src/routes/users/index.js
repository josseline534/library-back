const { SchemaValidator } = require('../../middlewares')
const { ListUsers } = require('./list')
const { UserSchema } = require('./schema')
const { CreateUser } = require('./create')
const { PageSchema } = require('../schema')

const PATH = '/users'

module.exports.UsersRoutes = (router) => {
  router
    .route(`${PATH}`)
    .get([SchemaValidator(PageSchema, 'query')], ListUsers)
    .post([SchemaValidator(UserSchema)], CreateUser)
}
