module.exports.ListAuthors = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('ListAuthors -> [error]: ', error)
    next(error)
  }
}
