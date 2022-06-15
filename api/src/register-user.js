const {hash_password} = require('./hash-password')
const {pool} = require('./pool')

const register_user = ({email, password}) => {
    const hashed_password = hash_password(password)

    return pool().getConnection()
        .then(connection => connection.query('use gamer_feud; call register(?, ?)', [email, hashed_password]))
}

module.exports = {
    register_user
}