const {hash_password} = require('./hash-password')
const {pool} = require('./pool')

const login_user = ({email, password}) => {
    const hashed_password = hash_password(password)

        return pool().getConnection()
            .then(connection => connection.query('use gamer_feud; select user_exists(?, ?)', [email, hashed_password]))
            .then(result => result[1][0][`user_exists('${email}', '${hashed_password}')`] > 0)
}

module.exports = {
    login_user
}