module.exports.ListUsers = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('ListUser -> [error]: ', error)
    next(error)
  }
}
