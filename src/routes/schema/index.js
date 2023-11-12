const Joi = require('joi')

module.exports.PageSchema = Joi.object().keys({
  page: Joi.number().required().min(1),
  pageSize: Joi.number().required().min(1)
})

module.exports.IdSchema = Joi.object().keys({
  id: Joi.number().required().min(1)
})
