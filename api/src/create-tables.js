const {pool} = require('./pool')
const {is_database_empty} = require('./is-database-empty')
const {read_script} = require('./read-script')

const create_tables = () => is_database_empty()
    .then(is_empty => {
        if (is_empty) {
            return Promise.all([pool(), read_script('create-tables')])
                .then(([conn, script]) => conn.query({sql: script}))
        }
    })

module.exports = {
    create_tables
}