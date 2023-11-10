module.exports.ListBookByAuthor = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('ListBookByAuthor -> [error]: ', error)
    next(error)
  }
}
