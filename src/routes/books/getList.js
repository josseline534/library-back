const { BookService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')

module.exports.ListBooks = async (req, res, next) => {
  try {
    const bookService = new BookService()

    const books = await bookService.find(req.query)

    res.status(200).send(formatResponse(books))
  } catch (error) {
    console.error('ListBooks -> [error]: ', error)
    next(error)
  }
}
