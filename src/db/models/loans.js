const { Model, DataTypes, Sequelize } = require('sequelize')
const { BOOK_TABLE } = require('./book')
const { USER_TABLE } = require('./user')

// name the db
const LOAN_TABLE = 'loans'

// schema the db
const LoanSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  bookId: {
    field: 'book_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: BOOK_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  loanAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'loan_at',
    defaultValue: Sequelize.NOW
  },
  returnAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'return_at',
    defaultValue: null
  }
}

class Loan extends Model {
  static associate (models) {
    this.belongsTo(models.Book, {
      as: 'books',
      foreignKey: 'bookId'
    })
    this.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'userId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: LOAN_TABLE,
      modelName: 'Loan',
      timestamps: false,
      underscored: true
    }
  }
}

module.exports = {
  LOAN_TABLE,
  LoanSchema,
  Loan
}
