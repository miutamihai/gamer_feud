const {pool} = require('./pool')
const {read_script} = require('./read-script')

const create_functions = () => Promise.all([pool().getConnection(), read_script('create-functions')])
    .then(([conn, script]) => conn.query({sql: script}))

module.exports = {
    create_functions
}
