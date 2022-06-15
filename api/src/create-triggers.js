const {pool} = require('./pool')
const {read_script} = require('./read-script')

const create_triggers = () => Promise.all([pool(), read_script('create-triggers')])
    .then(([conn, script]) => conn.query({sql: script}))

module.exports = {
    create_triggers
}
