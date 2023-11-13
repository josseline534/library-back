const { SchemaValidator, AuthorizerToken } = require('../../middlewares')
const { AddAuthor } = require('./add')
const { ListAuthors } = require('./list')
const { ListBookByAuthor } = require('./listBook')
const { PageSchema, IdSchema } = require('../schema')
const { AuthorSchema } = require('./schema')

const PATH = '/authors'

module.exports.AuthorsRoutes = (router) => {
  router
    .route(`${PATH}`)
    .get([AuthorizerToken, SchemaValidator(PageSchema, 'query')], ListAuthors)
    .post([AuthorizerToken, SchemaValidator(AuthorSchema)], AddAuthor)

  router
    .route(`${PATH}/:id`)
    .get([AuthorizerToken, SchemaValidator(IdSchema, 'params')], ListBookByAuthor)
}
