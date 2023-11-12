const { Model, DataTypes, Sequelize } = require('sequelize')

// name the db
const USER_TABLE = 'users'

// schema the db
const UserSchema = {
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
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  registerAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'register_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate (models) {
    this.hasMany(models.Loan, {
      as: 'loans',
      foreignKey: 'userId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
      underscored: true
    }
  }
}

module.exports = {
  USER_TABLE,
  UserSchema,
  User
}
