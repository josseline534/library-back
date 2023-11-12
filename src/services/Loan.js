const Boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')
const { Loan } = require('../db/models/loans')
class LoanService {
  /**
   *
   * @param {object} data
   * @param {string} data.libraryId
   * @param {string} data.userId
   * @returns
   */
  async registerLoan (data) {
    try {
      return await models.Loan.create(data)
    } catch (error) {
      console.log('[.registerLoan] error: ', error)
      throw error
    }
  }

  async registerReturn (id, returnAt = new Date()) {
    try {
      const loan = await this.findOne(id)
      return loan.update({ ...loan, returnAt })
    } catch (error) {
      console.log('[.registerReturn] error: ', error)
      throw error
    }
  }

  async find ({ page = 1, pageSize = 10 }) {
    try {
      const offset = (page - 1) * pageSize
      return await models.Loan.findAll({
        where: {
          returnAt: null
        },
        include: ['books', 'users'],
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
      const loan = await models.Loan.findByPk(id)

      if (!loan) {
        Boom.notFound('Loan not found')
      }
      return loan
    } catch (error) {
      console.log('[.findOne] error: ', error)
      throw error
    }
  }

  async delete (id) {
    try {
      const loan = await this.findOne(id)

      if (!loan) {
        Boom.notFound('Author not found')
      }
      await loan.destroy()
      return { id }
    } catch (error) {
      console.log('[.delete] error: ', error)
      throw error
    }
  }

  async findByBook (id) {
    try {
      return await models.Loan.findAll({
        where: {
          bookId: id,
          returnAt: null
        }
      })
    } catch (error) {
      console.log('[.find] error: ', error)
      throw error
    }
  }

  async deleteByBook (id) {
    try {
      const loans = await models.Loan.findAll({
        where: {
          bookId: id
        }
      })

      if (!loans) {
        throw Boom.notFound('Loan')
      }

      const loanIds = []
      for (const loan of loans) {
        loanIds.push(loan.id)
      }
      await Loan.destroy({
        where: {
          id: loanIds
        }
      })
      return loans
    } catch (error) {
      console.log('[.delete] error: ', error)
      throw error
    }
  }
}

module.exports = LoanService
