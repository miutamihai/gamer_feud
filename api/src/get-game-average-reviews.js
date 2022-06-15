const {pool} = require('./pool')

const get_game_average_reviews = ({game_id}) => {
    const game_id_input = parseInt(game_id)

    return pool().getConnection()
        .then(connection => connection.query('use gamer_feud; select get_game_average_reviews(?)', [game_id_input]))
        .then(result => result[1][0][`get_game_average_reviews(${game_id_input})`])
}

module.exports = {
    get_game_average_reviews
}
