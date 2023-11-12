const { AuthorService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')

module.exports.ListAuthors = async (req, res, next) => {
  try {
    const authorService = new AuthorService()

    const authors = await authorService.find(req.query)

    res.status(200).send(formatResponse(authors))
  } catch (error) {
    console.error('ListAuthors -> [error]: ', error)
    next(error)
  }
}
