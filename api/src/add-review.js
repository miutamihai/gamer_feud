const {pool} = require('./pool')

const add_review = ({user_id, game_id, value}) => {
    return pool()
        .then(connection => connection.query('use gamer_feud; call add_review(?, ?, ?)', [user_id, game_id, value]))
}

module.exports = {
    add_review
}
