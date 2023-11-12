const Boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')
class AuthorService {
  /**
   *
   * @param {object} data
   * @param {string} data.name
   * @param {string} [data.biography]
   * @param {Date} [data.birthday]
   * @returns
   */
  async create (data) {
    try {
      return await models.Author.create(data)
    } catch (error) {
      console.log('[.create] error: ', error)
      throw error
    }
  }

  async find ({ page = 1, pageSize = 10 }) {
    try {
      const offset = (page - 1) * pageSize
      return await models.Author.findAll({
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
      const author = await models.Author.findByPk(id, {
        include: ['books']
      })

      if (!author) {
        throw Boom.notFound('Author')
      }
      return author
    } catch (error) {
      console.log('[.findOne] error: ', error)
      throw error
    }
  }

  async delete (id) {
    try {
      const author = await models.Author.findByPk(id)

      if (!author) {
        throw Boom.notFound('Author')
      }
      await author.destroy()
      return { id }
    } catch (error) {
      console.log('[.delete] error: ', error)
      throw error
    }
  }
}

module.exports = AuthorService
