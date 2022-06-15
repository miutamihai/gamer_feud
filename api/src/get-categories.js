const {pool} = require('./pool')

const get_categories = () => pool()
    .then(connection => connection.query('use gamer_feud; call get_categories()', []))
    .then(result => result[1])

module.exports = {
    get_categories
}
