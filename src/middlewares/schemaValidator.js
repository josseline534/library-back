const { Boom } = require('@hapi/boom')
const Joi = require('joi')

const checkType = ['body', 'query', 'params']

/**
 *
 * @param {object} schema
 * @param {string} check 'body' | 'query' | 'params'
 * @returns
 */
module.exports.SchemaValidator =
  (schema, check = 'body') =>
    (req, _res, next) => {
      try {
        if (!checkType.includes(check)) {
          throw Boom.badRequest('Check type is invalid')
        }
        if (Joi.isSchema(schema)) {
          const { error, value } = schema.validate(
            req[check],
            { abortEarly: false }
          )
          if (error) {
            throw getJoiError(error)
          } else {
            req[check] = value
            next()
          }
        } else Boom.badRequest()
      } catch (error) {
        next(error)
      }
    }

const getJoiError = ({ details }) => {
  const { message } = details[0]
  return { message: message.replace(/\s/g, '_').replace(/"/g, '') }
}
