const { UserService } = require('../../services')
const { formatResponse } = require('../../utils/formatResponse')

module.exports.ListUsers = async (req, res, next) => {
  try {
    const userService = new UserService()

    const users = await userService.find(req.query)

    res.status(200).send(formatResponse(users))
  } catch (error) {
    console.error('ListUser -> [error]: ', error)
    next(error)
  }
}
