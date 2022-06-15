const {pool} = require('./pool')
const {read_script} = require('./read-script')

const populate_tables = () => Promise.all([pool().getConnection(), read_script('populate-tables')])
    .then(([conn, script]) => conn.query({sql: script}))

module.exports = {
    populate_tables
}
