const { Model, DataTypes } = require('sequelize')
const { AUTHOR_TABLE } = require('./author')

// name the db
const BOOK_TABLE = 'books'

// schema the db
const BookSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  authorId: {
    field: 'author_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: AUTHOR_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  postAt: {
    field: 'post_at',
    allowNull: true,
    type: DataTypes.DATE
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}

class Book extends Model {
  static associate (models) {
    this.belongsTo(models.Author, {
      as: 'author',
      foreignKey: 'authorId'
    })

    this.hasMany(models.Loan, {
      as: 'loans',
      foreignKey: 'bookId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: BOOK_TABLE,
      modelName: 'Book',
      timestamps: false,
      underscored: true
    }
  }
}

module.exports = {
  BOOK_TABLE,
  BookSchema,
  Book
}
