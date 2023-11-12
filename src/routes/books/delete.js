const { BookService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')
module.exports.DeleteBook = async (req, res, next) => {
  try {
    const bookService = new BookService()

    const book = await bookService.delete(req.params.id)

    res.status(200).send(formatResponse(book))
  } catch (error) {
    console.error('DeleteBook -> [error]: ', error)
    next(error)
  }
}
