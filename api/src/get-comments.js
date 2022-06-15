const {pool} = require('./pool')

const get_comments = ({game_id}) => pool()
    .then(connection => connection.query('use gamer_feud; call get_comments(?)', [game_id]))
    .then(result => result[1])

module.exports = {
    get_comments
}
