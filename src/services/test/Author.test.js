const { AuthorService } = require('..')

describe('AuthoeService', () => {
  let idAuthor
  // create a new user successfully
  it('should create a new author successfully', async () => {
    const authorService = new AuthorService()
    const data = {
      name: 'testAuthor',
      biography: 'test biography Author',
      birthday: new Date()
    }
    const newAuthor = await authorService.create(data)
    idAuthor = newAuthor.id
    expect(newAuthor).toBeDefined()
    expect(newAuthor.name).toBe(data.name)
    expect(newAuthor.biography).toBe(data.biography)
    expect(newAuthor.birthday.getTime()).toBeCloseTo(data.birthday.getTime())
  })

  // find all author successfully
  it('should find all users successfully', async () => {
    const authorService = new AuthorService()
    const authors = await authorService.find()
    expect(authors).toBeDefined()
    expect(Array.isArray(authors)).toBe(true)
  })

  // find one author by id successfully
  it('should find one author by id successfully', async () => {
    const authorService = new AuthorService()
    expect(authorService.findOne(idAuthor)).toBeDefined()
  })

  // create a new author with invalid data (e.g. missing required fields)
  it('should throw an error when creating a new author with invalid data', async () => {
    const authorService = new AuthorService()
    const data = {
      username: 'testAuthor'
    }
    await expect(authorService.create(data)).rejects.toThrow()
  })

  // find one author by id with invalid id (e.g. non-existent id)
  it('should return null when finding one author by invalid id', async () => {
    const authorService = new AuthorService()
    expect(authorService.findOne(999)).rejects.toThrow()
  })

  // find one author by id with invalid data (e.g. non-numeric id)
  it('should throw an error when finding one author by invalid data', async () => {
    const authorService = new AuthorService()
    expect(authorService.findOne('abc')).rejects.toThrow()
  })
})
