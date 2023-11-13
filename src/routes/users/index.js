const { SchemaValidator, AuthorizerToken } = require('../../middlewares')
const { ListUsers } = require('./list')
const { UserSchema } = require('./schema')
const { CreateUser } = require('./create')
const { PageSchema } = require('../schema')

const PATH = '/users'

module.exports.UsersRoutes = (router) => {
  router
    .route(`${PATH}`)
    .get([AuthorizerToken, SchemaValidator(PageSchema, 'query')], ListUsers)
    .post([AuthorizerToken, SchemaValidator(UserSchema)], CreateUser)
}
