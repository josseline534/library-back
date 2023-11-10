const ERROR_TAG = '[ERROR-HANDLER]'

// eslint-disable-next-line max-params
module.exports.ErrorHandler = (error, { method, originalUrl }, res, _) => {
  if ('status' in error) {
    console.error(ERROR_TAG, {
      method,
      originalUrl,
      status: error.status,
      message: error.message
    })
    res.status(error.status).json(error)
  } else {
    console.error(ERROR_TAG, { method, originalUrl }, error.message)
    res.status(500).json(error)
  }
}

module.exports.NotFoundErrorHandler = (_req, res) => {
  res.status(400).json({ message: 'not found' })
}
