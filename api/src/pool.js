const mariadb = require('mariadb');

let instance

const create_pool = () => mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectionLimit: 5,
    multipleStatements: true
});

const pool = () => {
    if (!instance) {
        instance = create_pool()
    }

    return instance
}

module.exports = {
    pool
}
