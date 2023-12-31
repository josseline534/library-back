const Joi = require ('joi')
const{ SchemaValidator } = require ('../schemaValidator')

describe('SchemaValidator', () => {
  // Validates schema against request body and passes validation
  it('should validate schema against request body and pass validation', () => {
    const schema = Joi.object({
      name: Joi.string().required(),
      age: Joi.number().required()
    })
    const req = {
      body: {
        name: 'John',
        age: 25
      }
    }
    const next = jest.fn()

    SchemaValidator(schema, 'body')(req, null, next)

    expect(next).toBeCalledTimes(1)
    expect(next).toBeCalledWith()
    expect(req.body).toEqual({
      name: 'John',
      age: 25
    })
  })

})
