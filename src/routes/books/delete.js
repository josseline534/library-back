module.exports.DeleteBook = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('DeleteBook -> [error]: ', error)
    next(error)
  }
}
