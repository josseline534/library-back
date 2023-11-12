const { BookService } = require("..")

describe('BookService', () => {
  let idBook
  // create a new book successfully
  it('should create a new book successfully', async () => {
    const bookService = new BookService()
    const books = await bookService.find()
    const data = {
      title: 'test title book',
      authorId: 1,
      description: 'test description book',
      isbn:`1223445${books.length}`,
      postAt:new Date(),
      stock: 30
    }
    const newBook = await bookService.create(data)
    idBook = newBook.id
    expect(newBook).toBeDefined()
    expect(newBook.title).toBe(data.title)
    expect(newBook.authorId).toBe(data.authorId)
    expect(newBook.description).toBe(data.description)
    expect(newBook.isbn).toBe(data.isbn)
    expect(newBook.stock).toBe(data.stock)
    expect(newBook.postAt.getTime()).toBeCloseTo(data.postAt.getTime())
  })

  // find all book successfully
  it('should find all books successfully', async () => {
    const bookService = new BookService()
    const books = await bookService.find()
    expect(books).toBeDefined()
    expect(Array.isArray(books)).toBe(true)
  })

  // find one book by id successfully
  it('should find one book by id successfully', async () => {
    const bookService = new BookService()
    const book = await bookService.findOne(idBook)
    expect(book).toBeDefined()
  })

  // update one book by id successfully
  it('should update one book by id successfully', async () => {
    const bookService = new BookService()
    const data = {
      title: 'test title book 2',
    }
    const book = await bookService.update(idBook, data)
    expect(book.id).toBe(idBook)
  })

  // delete one book by id successfully
  it('should delete one book by id successfully', async () => {
    const bookService = new BookService()
    const book = await bookService.delete(idBook)
    expect(book.id).toBe(idBook)
  })
})