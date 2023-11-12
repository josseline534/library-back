const Joi = require('joi')
const book = {
  title: Joi.string(),
  authorId: Joi.number(),
  description: Joi.string(),
  isbn: Joi.string(),
  postAt: Joi.date(),
  stock: Joi.number()
}
module.exports.BookCreateSchema = Joi.object().keys({
  title: book.title.required(),
  authorId: book.authorId.required(),
  description: book.description,
  isbn: book.isbn.required(),
  postAt: book.postAt,
  stock: book.stock.required()
})

module.exports.BookEditSchema = Joi.object().keys({ ...book })
