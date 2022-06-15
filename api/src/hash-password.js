const crypto = require('crypto')

const hash_password = password => {
    const hash = crypto.createHmac('sha512', process.env.PASSWORD_SALT)
    hash.update(password)

    return hash.digest('hex')
}

module.exports = {
    hash_password
}
