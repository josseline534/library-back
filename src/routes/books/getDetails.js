module.exports.DetailBook = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('DetailBook -> [error]: ', error)
    next(error)
  }
}
