const {pool} = require('./pool')
const {read_script} = require('./read-script')

const create_procedures = () => Promise.all([pool().getConnection(), read_script('create-procedures')])
    .then(([conn, script]) => conn.query({sql: script}))

module.exports = {
    create_procedures
}