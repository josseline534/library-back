module.exports.ListActiveLoanBook = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('ListActiveLoanBook -> [error]: ', error)
    next(error)
  }
}
