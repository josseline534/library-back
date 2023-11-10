const { SchemaValidator } = require('../../middlewares')
const { CreateBook } = require('./create')
const { ListBooks } = require('./getList')
const { DetailBook } = require('./getDetails')
const { EditBook } = require('./edit')
const { DeleteBook } = require('./delete')
const { BookCreateSchema, BookEditSchema } = require('./schema')

const PATH = '/books'

module.exports.BooksRoutes = (router) => {
  router
    .route(`${PATH}`)
    .get([], ListBooks)
    .post([SchemaValidator(BookCreateSchema)], CreateBook)

  router
    .route(`${PATH}/:id`)
    .get([], DetailBook)
    .put([SchemaValidator(BookEditSchema)], EditBook)
    .delete([], DeleteBook)
}
