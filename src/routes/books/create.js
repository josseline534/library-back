module.exports.CreateBook = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('CreateBook -> [error]: ', error)
    next(error)
  }
}
