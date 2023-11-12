const Boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')
const LoanService = require('./Loan')

class BookService {
  /**
   *
   * @param {object} data
   * @param {string} data.title
   * @param {string} [data.description]
   * @param {number} data.authorId
   * @param {string} data.isbn
   * @param {Date} [data.postAt]
   * @param {number} data.stock
   * @returns
   */
  async create (data) {
    try {
      return await models.Book.create(data)
    } catch (error) {
      console.log('[.create] error: ', error)
      throw error
    }
  }

  /**
   *
   * @param {object} data
   * @param {number} [data.page]
   * @param {number} [data.pageSize]
   * @returns
   */
  async find ({ page = 1, pageSize = 10 }) {
    try {
      const offset = (page - 1) * pageSize
      return await models.Book.findAll({
        limit: pageSize,
        offset
      })
    } catch (error) {
      console.log('[.find] error: ', error)
      throw error
    }
  }

  /**
   *
   * @param {number} id
   * @returns
   */
  async findOne (id) {
    try {
      const book = await models.Book.findByPk(id, {
        include: ['author']
      })
      if (!book) throw Boom.notFound('Book')
      return book
    } catch (error) {
      console.log('[.findOne] error: ', error)
      throw error
    }
  }

  /**
   *
   * @param {number} id
   * @param {object} changes
   * @param {string} changes.title
   * @param {string} [changes.description]
   * @param {number} changes.authorId
   * @param {string} changes.isbn
   * @param {Date} [changes.postAt]
   * @param {number} changes.stock
   * @returns
   */
  async update (id, changes) {
    try {
      const book = await models.Book.findByPk(id)
      if (!book) throw Boom.notFound('Book')
      const dataUpdate = {
        ...book, ...changes
      }

      if (changes.authorId) dataUpdate.author_id = changes.authorId
      const resp = await book.update(dataUpdate)
      return resp
    } catch (error) {
      console.log('[.update] error: ', error)
      throw error
    }
  }

  /**
   *
   * @param {number} id
   * @returns
   */
  async delete (id) {
    try {
      const book = await models.Book.findByPk(id)
      if (!book) throw Boom.notFound('Book')
      const loanService = new LoanService()
      const loans = await loanService.findByBook(id)

      if (loans.length) throw Boom.conflict('Loan')

      await loanService.deleteByBook(id)
      await book.destroy()
      return { id }
    } catch (error) {
      console.log('[.delete] error: ', error)
      throw error
    }
  }
}

module.exports = BookService
