const {pool} = require('./pool')

const delete_comment = ({comment_id}) => {
    return pool().getConnection()
        .then(connection => connection.query('use gamer_feud; call delete_comment(?)', [parseInt(comment_id)]))
}

module.exports = {
    delete_comment
}
