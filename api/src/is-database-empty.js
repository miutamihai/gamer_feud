const {pool} = require('./pool')

const make_query = () => `SELECT COUNT(DISTINCT \`table_name\`) FROM \`information_schema\`.\`columns\` WHERE \`table_schema\` = "${process.env.DB_NAME}"`

const is_database_empty = () => pool()
    .then(conn => conn.query(make_query()))
    .then(result => result[0]['COUNT(DISTINCT \`table_name\`)'] == 0)

module.exports = {
    is_database_empty
}