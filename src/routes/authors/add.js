const { AuthorService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')
module.exports.AddAuthor = async (req, res, next) => {
  try {
    const authorService = new AuthorService()

    const newAuthor = await authorService.create(req.body)

    res.status(201).send(formatResponse(newAuthor))
  } catch (error) {
    console.error('AddAuthor -> [error]: ', error)
    next(error)
  }
}
