const {pool} = require('./pool')

const add_category = ({name, description}) => {
    return pool()
        .then(connection => connection.query('use gamer_feud; call add_category(?, ?)', [name, description]))
}

module.exports = {
    add_category
}
