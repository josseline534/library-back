const { UserService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')
module.exports.CreateUser = async (req, res, next) => {
  try {
    const userService = new UserService()

    const newUser = await userService.create(req.body)

    res.status(201).send(formatResponse(newUser))
  } catch (error) {
    console.error('CreateUser -> [error]: ', error)
    next(error)
  }
}
