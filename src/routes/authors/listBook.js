const { AuthorService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')

module.exports.ListBookByAuthor = async (req, res, next) => {
  try {
    const authorService = new AuthorService()

    const author = await authorService.findOne(req.params.id)

    res.status(200).send(formatResponse(author))
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('ListBookByAuthor -> [error]: ', error)
    next(error)
  }
}
