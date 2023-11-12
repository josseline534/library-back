const { Admin, AdminSchema } = require('./admin')
const { Author, AuthorSchema } = require('./author')
const { Book, BookSchema } = require('./book')
const { Loan, LoanSchema } = require('./loans')
const { User, UserSchema } = require('./user')

module.exports.setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize))
  Author.init(AuthorSchema, Author.config(sequelize))
  Book.init(BookSchema, Book.config(sequelize))
  Loan.init(LoanSchema, Loan.config(sequelize))
  Admin.init(AdminSchema, Admin.config(sequelize))

  User.associate(sequelize.models)
  Author.associate(sequelize.models)
  Book.associate(sequelize.models)
  Loan.associate(sequelize.models)
  Admin.associate(sequelize.models)
}
