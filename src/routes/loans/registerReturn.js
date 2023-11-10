module.exports.RegisterReturnBook = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('RegisterReturnBook -> [error]: ', error)
    next(error)
  }
}
