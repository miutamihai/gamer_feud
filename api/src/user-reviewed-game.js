const {pool} = require('./pool')

const user_reviewed_game = ({user_id, game_id}) => {
    const user_id_input = parseInt(user_id)
    const game_id_input = parseInt(game_id)

    return pool()
        .then(connection => connection.query('use gamer_feud; select user_reviewed_game(?, ?)', [user_id_input, game_id_input]))
        .then(result => result[1][0][`user_reviewed_game(${user_id_input}, ${game_id_input})`])
}

module.exports = {
    user_reviewed_game
}
