module.exports.ListBooks = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('ListBooks -> [error]: ', error)
    next(error)
  }
}
