const { LoanService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')

module.exports.RegisterReturnBook = async (req, res, next) => {
  try {
    const loanService = new LoanService()

    const loans = await loanService.registerReturn(req.params.id)

    res.status(200).send(formatResponse(loans))
  } catch (error) {
    console.error('RegisterReturnBook -> [error]: ', error)
    next(error)
  }
}
