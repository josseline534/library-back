const { Model, DataTypes } = require('sequelize')

// name the db
const AUTHOR_TABLE = 'authors'

// schema the db
const AuthorSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  biography: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  birthday: {
    allowNull: false,
    type: DataTypes.DATE
  }
}

class Author extends Model {
  static associate (models) {
    this.hasMany(models.Book, {
      as: 'books',
      foreignKey: 'author_id'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: AUTHOR_TABLE,
      modelName: 'Author',
      timestamps: false,
      underscored: true
    }
  }
}

module.exports = {
  AUTHOR_TABLE,
  AuthorSchema,
  Author
}
