const { SchemaValidator, AuthorizerToken } = require('../../middlewares')
const { CreateBook } = require('./create')
const { ListBooks } = require('./getList')
const { DetailBook } = require('./getDetails')
const { EditBook } = require('./edit')
const { DeleteBook } = require('./delete')
const { BookCreateSchema, BookEditSchema } = require('./schema')
const { PageSchema, IdSchema } = require('../schema')

const PATH = '/books'

module.exports.BooksRoutes = (router) => {
  router
    .route(`${PATH}`)
    .get([AuthorizerToken, SchemaValidator(PageSchema, 'query')], ListBooks)
    .post([AuthorizerToken, SchemaValidator(BookCreateSchema)], CreateBook)

  router
    .route(`${PATH}/:id`)
    .get([AuthorizerToken, SchemaValidator(IdSchema, 'params')], DetailBook)
    .put(
      [AuthorizerToken, SchemaValidator(IdSchema, 'params'), SchemaValidator(BookEditSchema)],
      EditBook
    )
    .delete([AuthorizerToken, SchemaValidator(IdSchema, 'params')], DeleteBook)
}
