const Joi = require('joi')

module.exports.LoansSchema = Joi.object().keys({
  bookId: Joi.number().required(),
  userId: Joi.number().required()
})

module.exports.ReturnSchema = Joi.object().keys({
  returnAt: Joi.date()
})
