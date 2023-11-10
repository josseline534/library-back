module.exports.EditBook = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('EditBook -> [error]: ', error)
    next(error)
  }
}
