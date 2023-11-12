const { LoanService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')

module.exports.RegisterLoanBook = async (req, res, next) => {
  try {
    const loanService = new LoanService()

    const loans = await loanService.registerLoan(req.body)

    res.status(200).send(formatResponse(loans))
  } catch (error) {
    console.error('RegisterLoanBook -> [error]: ', error)
    next(error)
  }
}
