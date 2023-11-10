const express = require('express')
const cors = require('cors')
const { config } = require('./config')
const { ErrorHandler, NotFoundErrorHandler } = require('./middlewares')
const { Routes } = require('./routes')

const app = express()
const port = config.port

app.use(express.json())
app.use(cors())

app.get('/test', (req, res) => res.send('Hello World!'))
app.use('/api', Routes)

app.use(NotFoundErrorHandler)
app.use(ErrorHandler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
