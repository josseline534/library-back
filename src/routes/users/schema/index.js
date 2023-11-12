const Joi = require('joi')

module.exports.UserSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required()
})
