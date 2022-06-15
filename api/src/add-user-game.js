const {pool} = require('./pool')

const add_user_game = ({user_id, game_id}) => {
    return pool().getConnection()
        .then(connection => connection.query('use gamer_feud; call add_user_game(?, ?)', [user_id, game_id]))
}

module.exports = {
    add_user_game
}
