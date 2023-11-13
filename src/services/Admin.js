const Boom = require('@hapi/boom')
const base64 = require('base-64')
const jwt = require('jsonwebtoken')
const { models } = require('../libs/sequelize')
const { encryptedPassword, comparePassword } = require('../utils/encripted')
const { config } = require('../config')

class AdminService {
  /**
   *
   * @param {object} data
   * @param {string} data.name
   * @param {string} data.email
   * @returns
   */
  async create (data) {
    try {
      data.password = encryptedPassword(data.password)
      const admin = await models.Admin.create(data)
      delete admin.dataValues.password
      return admin
    } catch (error) {
      console.log('[.create] error: ', error)
      throw error
    }
  }

  async findOne (email) {
    try {
      const user = await models.Admin.findOne({
        where: {
          email
        }
      })

      if (!user) {
        throw Boom.notFound('Admin')
      }
      return user
    } catch (error) {
      console.log('[.findOne] error: ', error)
      throw error
    }
  }

  async valid (authHeader) {
    if (!authHeader.startsWith('Basic ')) throw Boom.unauthorized()

    const { email, password } = this.decodedCredentials(authHeader)
    const user = await this.findOne(email)
    if (!comparePassword(password, user.password)) throw Boom.unauthorized()
    const token = this.generateToken(user)
    console.log('token: ', token)
    await this.saveToken(user, token)
    return token
  }

  decodedCredentials (authHeader) {
    const base64Credentials = authHeader.slice('Basic '.length)
    const credentials = base64.decode(base64Credentials)

    const [username, password] = credentials.split(':')

    return { email: username, password }
  }

  generateToken (user) {
    console.log('user: ', user.email)
    return jwt.sign(
      {
        email: user.email
      },
      config.secretKey,
      { expiresIn: '12h' }
    )
  }

  async saveToken (user, token) {
    try {
      const dataUpdate = {
        ...user, recoveryToken: token
      }

      await user.update(dataUpdate)
    } catch (error) {
      console.log('[.saveToken] error: ', error)
      throw error
    }
  }

  async verifyToken (token) {
    try {
      const decoded = await jwt.verify(token, config.secretKey)
      console.log('decoded: ', decoded)

      const user = await this.findOne(decoded.email)

      if (user.recoveryToken !== token) throw Boom.unauthorized()

      return user
    } catch (error) {
      console.log('[.verifyToken] error: ', error)
      throw error
    }
  }
}

module.exports = AdminService
