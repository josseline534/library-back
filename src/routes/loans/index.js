const { SchemaValidator, AuthorizerToken } = require('../../middlewares')
const { PageSchema, IdSchema } = require('../schema')
const { ListActiveLoanBook } = require('./listActive')
const { RegisterLoanBook } = require('./registerLoan')
const { RegisterReturnBook } = require('./registerReturn')
const { LoansSchema, ReturnSchema } = require('./schema')

const PATH = '/loans'

module.exports.LoansRoutes = (router) => {
  router.route(`${PATH}`).get([AuthorizerToken, SchemaValidator(PageSchema, 'query')], ListActiveLoanBook)

  router
    .route(`${PATH}/register`)
    .post([AuthorizerToken, SchemaValidator(LoansSchema)], RegisterLoanBook)

  router
    .route(`${PATH}/return/:id`)
    .post([AuthorizerToken, SchemaValidator(IdSchema, 'params'), SchemaValidator(ReturnSchema)], RegisterReturnBook)
}
