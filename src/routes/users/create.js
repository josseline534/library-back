module.exports.CreateUser = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('CreateUser -> [error]: ', error)
    next(error)
  }
}
