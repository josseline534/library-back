const { BookService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')

module.exports.CreateBook = async (req, res, next) => {
  try {
    const bookService = new BookService()

    const book = await bookService.create(req.body)

    res.status(201).send(formatResponse(book))
  } catch (error) {
    console.error('CreateBook -> [error]: ', error)
    next(error)
  }
}
