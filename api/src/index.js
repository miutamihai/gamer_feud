const {config} = require('dotenv')
const {create_db} = require('./create-db')
const {create_tables} = require('./create-tables')
const express = require('express')

config()

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

create_db()
    .then(() => console.log('Database created'))
    .then(() => create_tables())
    .then(() => console.log('Tables created'))
    .then(() => app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`)))