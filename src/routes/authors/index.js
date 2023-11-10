const { SchemaValidator } = require('../../middlewares')
const { AddAuthor } = require('./add')
const { ListAuthors } = require('./list')
const { ListBookByAuthor } = require('./listBook')
const { AuthorSchema } = require('./schema')

const PATH = '/authors'

module.exports.AuthorsRoutes = (router) => {
  router
    .route(`${PATH}`)
    .get([], ListAuthors)
    .post([SchemaValidator(AuthorSchema)], AddAuthor)

  router.route(`${PATH}/:id`).get([], ListBookByAuthor)
}
