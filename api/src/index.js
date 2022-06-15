const {config} = require('dotenv')
const {create_db} = require('./create-db')

config()

create_db()
    .then(() => console.log('Database created'))