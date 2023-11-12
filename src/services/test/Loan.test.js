const { AuthorService, LoanService } = require('..')

describe('AuthoeService', () => {
  let idLoan
  // create a new loan successfully
  it('should create a new loan successfully', async () => {
    const loanService = new LoanService()
    const data = {
      bookId: 2,
      userId: 2
    }
    const newLoan = await loanService.registerLoan(data)
    idLoan = newLoan.id
    expect(newLoan).toBeDefined()
    expect(newLoan.bookId).toBe(data.bookId)
    expect(newLoan.userId).toBe(data.userId)
  })

  // throw an error when creating a new loan with invalid data
  it('should throw an error when creating a new loan with invalid data', async () => {
    const loanService = new LoanService()
    const data = {
      bookId: 1,
      userId: 2
    }

    await expect(loanService.registerLoan(data)).rejects.toThrow()
  })

  // register a return of book successfully
  it('should register a return of book successfully', async () => {
    const loanService = new LoanService()
    const loan = await loanService.registerReturn(idLoan, new Date())
    expect(loan).toBeDefined()
  })

  // find all loans active successfully
  it('should find all loans active successfully', async () => {
    const loanService = new LoanService()
    const loans = await loanService.find()
    expect(loans).toBeDefined()
    expect(Array.isArray(loans)).toBe(true)
  })

})
