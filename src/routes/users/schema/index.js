const Joi = require('joi')

module.exports.UserSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  registerDate: Joi.date(),
  password: Joi.string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .required()
})
