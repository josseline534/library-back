module.exports.RegisterLoanBook = async (req, res, next) => {
  try {
    res.status(200).send({ message: 'ok' })
  } catch (error) {
    console.error('RegisterLoanBook -> [error]: ', error)
    next(error)
  }
}
