const { BookService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')

module.exports.DetailBook = async (req, res, next) => {
  try {
    const bookService = new BookService()

    const book = await bookService.findOne(req.params.id)

    res.status(200).send(formatResponse(book))
  } catch (error) {
    console.error('DetailBook -> [error]: ', error)
    next(error)
  }
}
