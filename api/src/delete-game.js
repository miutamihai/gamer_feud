const {pool} = require('./pool')

const delete_game = ({game_id}) => {
    return pool().getConnection()
        .then(connection => connection.query('use gamer_feud; call delete_game(?)', [game_id]))
}

module.exports = {
    delete_game
}
