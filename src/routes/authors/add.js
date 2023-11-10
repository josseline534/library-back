module.exports.AddAuthor = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('AddAuthor -> [error]: ', error)
    next(error)
  }
}
