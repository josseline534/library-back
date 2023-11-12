const { Model, DataTypes } = require('sequelize')

// name the db
const ADMIN_TABLE = 'admins'

// schema the db
const AdminSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  recoveryToken: {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING
  }
}

class Admin extends Model {
  static associate () {}

  static config (sequelize) {
    return {
      sequelize,
      tableName: ADMIN_TABLE,
      modelName: 'Admin',
      timestamps: false,
      underscored: true
    }
  }
}

module.exports = {
  ADMIN_TABLE,
  AdminSchema,
  Admin
}
