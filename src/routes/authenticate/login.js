const AdminService = require('../../services/Admin')
const { formatResponse } = require('../../utils/formatResponse')

// const { AuthorizerController } = require('../../controller/AuthorizerController')
module.exports.LoginUser = async (req, res, next) => {
  const { headers } = req
  try {
    const authorization = headers.authorization
    if (authorization === null || authorization === undefined) {
      throw new Error('unauthorized')
    }

    const adminService = new AdminService()
    const token = await adminService.valid(authorization)
    res.status(200).send(formatResponse(token))
  } catch (error) {
    next(error)
  }
}
