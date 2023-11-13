const AdminService = require('../../services/Admin')
const { formatResponse } = require('../../utils/formatResponse')

// const { AuthorizerController } = require('../../controller/AuthorizerController')
module.exports.RegisterAdmin = async (req, res, next) => {
  try {
    const adminService = new AdminService()
    const admin = await adminService.create(req.body)
    res.status(201).send(formatResponse(admin))
  } catch (error) {
    next(error)
  }
}
