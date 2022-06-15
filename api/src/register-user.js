const {hash_password} = require('./hash-password')
const {pool} = require('./pool')

const register_user = ({email, password}) => {
    const hashed_password = hash_password(password)

    return pool()
        .then(connection => connection.query('use gamer_feud; call register(?, ?)', [email, hashed_password]))
        .then(result => result[1][0].id)
}

module.exports = {
    register_user
}