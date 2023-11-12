const { LoanService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')

module.exports.ListActiveLoanBook = async (req, res, next) => {
  try {
    const loanService = new LoanService()

    const loans = await loanService.find(req.query)

    res.status(200).send(formatResponse(loans))
  } catch (error) {
    console.error('ListActiveLoanBook -> [error]: ', error)
    next(error)
  }
}
