const { SchemaValidator } = require('../../middlewares')
const { AddAuthor } = require('./add')
const { ListAuthors } = require('./list')
const { ListBookByAuthor } = require('./listBook')
const { PageSchema, IdSchema } = require('../schema')
const { AuthorSchema } = require('./schema')

const PATH = '/authors'

module.exports.AuthorsRoutes = (router) => {
  router
    .route(`${PATH}`)
    .get([SchemaValidator(PageSchema, 'query')], ListAuthors)
    .post([SchemaValidator(AuthorSchema)], AddAuthor)

  router
    .route(`${PATH}/:id`)
    .get([SchemaValidator(IdSchema, 'params')], ListBookByAuthor)
}
