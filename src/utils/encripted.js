const { hashSync, compareSync } = require('bcrypt')
module.exports.encryptedPassword = (password) => {
  const saltRounds = 10
  const hashedPassword = hashSync(password, saltRounds)
  return hashedPassword
}

module.exports.comparePassword = (password, passEncrypted) => {
  return compareSync(password, passEncrypted)
}
