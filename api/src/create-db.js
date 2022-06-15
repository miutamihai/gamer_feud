const {pool} = require('./pool')

const create_db = () => pool().getConnection()
    .then(conn => conn.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`))

module.exports = {
    create_db
}