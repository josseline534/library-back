const { Router } = require('express')
const { LoginRoutes } = require('./authenticate')
const { AuthorsRoutes } = require('./authors/index')
const { BooksRoutes } = require('./books/index')
const { LoansRoutes } = require('./loans/index')
const { UsersRoutes } = require('./users/index')

const router = Router()

LoginRoutes(router)
AuthorsRoutes(router)
BooksRoutes(router)
LoansRoutes(router)
UsersRoutes(router)

module.exports.Routes = router
