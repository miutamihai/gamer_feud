const {pool} = require('./pool')

const delete_game = ({game_id}) => {
    return pool()
        .then(connection => connection.query('use gamer_feud; call delete_game(?)', [parseInt(game_id)]))
}

module.exports = {
    delete_game
}
