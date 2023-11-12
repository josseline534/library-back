const UserService = require('../User')

describe('UserService', () => {
  let idUser
  // create a new user successfully
  it('should create a new user successfully', async () => {
    const userService = new UserService()
    const users = await userService.find()
    const totalUsers = users.length
    const data = {
      name: 'testuser',
      email: `testuser${totalUsers + 1}@example.com`
    }
    const newUser = await userService.create(data)
    idUser = newUser.id
    expect(newUser).toBeDefined()
    expect(newUser.name).toBe('testuser')
    expect(newUser.email).toBe(`testuser${totalUsers + 1}@example.com`)
  })

  // find all users successfully
  it('should find all users successfully', async () => {
    const userService = new UserService()
    const users = await userService.find()
    expect(users).toBeDefined()
    expect(Array.isArray(users)).toBe(true)
  })

  // find one user by id successfully
  it('should find one user by id successfully', async () => {
    const userService = new UserService()
    const user = await userService.findOne(idUser)
    expect(user).toBeDefined()
    expect(user.id).toBe(idUser)
  })

  // create a new user with invalid data (e.g. missing required fields)
  it('should throw an error when creating a new user with invalid data', async () => {
    const userService = new UserService()
    const data = {
      username: 'testuser'
    }
    await expect(userService.create(data)).rejects.toThrow()
  })

  // find one user by id with invalid id (e.g. non-existent id)
  it('should return null when finding one user by invalid id', async () => {
    const userService = new UserService()
    const user = await userService.findOne(999)
    expect(user).toBeNull()
  })

  // find one user by id with invalid data (e.g. non-numeric id)
  it('should throw an error when finding one user by invalid data', async () => {
    const userService = new UserService()
    expect(userService.findOne('abc')).rejects.toThrow()
  })

  // delete one user by id successfully
  it('should delete one user by id successfully', async () => {
    const userService = new UserService()
    const user = await userService.delete(idUser)
    const userDelete = await userService.findOne(idUser)
    expect(userDelete).toBeNull()
    expect(user.id).toBe(idUser)
  })
})
