const Boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class UserService {
  /**
   *
   * @param {object} data
   * @param {string} data.name
   * @param {string} data.email
   * @returns
   */
  async create (data) {
    try {
      return await models.User.create(data)
    } catch (error) {
      console.log('[.create] error: ', error)
      throw error
    }
  }

  async find ({ page = 1, pageSize = 10 }) {
    try {
      const offset = (page - 1) * pageSize
      return await models.User.findAll({
        limit: pageSize,
        offset
      })
    } catch (error) {
      console.log('[.find] error: ', error)
      throw error
    }
  }

  async findOne (id) {
    try {
      const user = await models.User.findByPk(id)

      if (!user) {
        throw Boom.notFound('user not found')
      }
      return user
    } catch (error) {
      console.log('[.findOne] error: ', error)
      throw error
    }
  }

  async delete (id) {
    try {
      const user = await models.User.findByPk(id)

      if (!user) {
        throw Boom.notFound('user not found')
      }
      await user.destroy()
      return { id }
    } catch (error) {
      console.log('[.delete] error: ', error)
      throw error
    }
  }
}

module.exports = UserService
