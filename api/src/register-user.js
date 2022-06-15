const crypto = require('crypto')
const {pool} = require('./pool')

const hash_password = password => {
    const hash = crypto.createHmac('sha512', process.env.PASSWORD_SALT)
    hash.update(password)

    return hash.digest('hex')
}

const register_user = ({email, password}) => {
    const hashed_password = hash_password(password)

    return pool().getConnection()
        .then(connection => connection.query('use gamer_feud; call register(?, ?)', [email, hashed_password]))
}

module.exports = {
    register_user
}