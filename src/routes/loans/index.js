const { SchemaValidator } = require('../../middlewares')
const { ListActiveLoanBook } = require('./listActive')
const { RegisterLoanBook } = require('./registerLoan')
const { RegisterReturnBook } = require('./registerReturn')
const { LoansSchema, ReturnSchema } = require('./schema')

const PATH = '/loans'

module.exports.LoansRoutes = (router) => {
  router.route(`${PATH}`).get([], ListActiveLoanBook)

  router
    .route(`${PATH}/register`)
    .post([SchemaValidator(LoansSchema)], RegisterLoanBook)

  router
    .route(`${PATH}/return`)
    .post([SchemaValidator(ReturnSchema)], RegisterReturnBook)
}
