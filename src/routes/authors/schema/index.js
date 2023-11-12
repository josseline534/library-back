const Joi = require('joi')

module.exports.AuthorSchema = Joi.object().keys({
  name: Joi.string().required(),
  biography: Joi.string(),
  birthday: Joi.date()
})
