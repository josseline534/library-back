'use strict'

const { ADMIN_TABLE, AdminSchema } = require('../models/admin')
const { AUTHOR_TABLE, AuthorSchema } = require('../models/author')
const { BOOK_TABLE, BookSchema } = require('../models/book')
const { LOAN_TABLE, LoanSchema } = require('../models/loans')
const { USER_TABLE, UserSchema } = require('../models/user')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(ADMIN_TABLE, AdminSchema)
    await queryInterface.createTable(AUTHOR_TABLE, AuthorSchema)
    await queryInterface.createTable(BOOK_TABLE, BookSchema)
    await queryInterface.createTable(LOAN_TABLE, LoanSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(ADMIN_TABLE)
    await queryInterface.dropTable(AUTHOR_TABLE)
    await queryInterface.dropTable(BOOK_TABLE)
    await queryInterface.dropTable(LOAN_TABLE)
  }
}
