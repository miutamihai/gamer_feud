const {pool} = require('./pool')

const get_games = ({limit, offset}) => {
    const values = [
        limit || process.env.DEFAULT_LIMIT,
        offset || process.env.DEFAULT_OFFSET
    ]

    return pool()
        .then(connection => connection.query('use gamer_feud; call get_games(?, ?)', values))
        .then(result => result[1])
}

module.exports = {
    get_games
}
