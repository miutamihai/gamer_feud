const {pool} = require('./pool')

const add_comment = ({content, game_id, user_id}) => {
    return pool()
        .then(connection => connection.query('use gamer_feud; call add_comment(?, ?, ?)', [content, game_id, user_id]))
}

module.exports = {
    add_comment
}
