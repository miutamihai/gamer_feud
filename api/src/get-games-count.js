const {pool} = require('./pool')

const get_games_count = () => pool()
        .then(connection => connection.query('use gamer_feud; select get_games_count()', []))
        .then(result => result[1][0]['get_games_count()'])

module.exports = {
    get_games_count
}
