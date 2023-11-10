// const { AuthorizerController } = require('../../controller/AuthorizerController')
module.exports.LoginUser = async (req, res, next) => {
  const { headers } = req
  try {
    const authorization = headers.authorization
    if (authorization === null || authorization === undefined) {
      throw new Error('unauthorized')
    }
    // const token = await AuthorizerController.valid(authorization)
    res.status(200).send({ status: 'ok' })
  } catch (error) {
    next(error)
  }
}
