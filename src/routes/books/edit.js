const BookService = require('../../services/Book')
const { formatResponse } = require('../../utils/formatResponse')

module.exports.EditBook = async (req, res, next) => {
  const {
    params: { id },
    body
  } = req
  try {
    const bookService = new BookService()

    const book = await bookService.update(id, body)

    res.status(200).send(formatResponse(book))
  } catch (error) {
    console.error('EditBook -> [error]: ', error)
    next(error)
  }
}
