const {pool} = require('./pool')

const add_game = ({name, category_id, description, user_id}) => {
    return pool()
        .then(connection => connection.query('use gamer_feud; call add_game(?, ?, ?, ?)', [name, category_id, description, user_id]))
}

module.exports = {
    add_game
}
