const {config} = require('dotenv')
const {create_db} = require('./create-db')
const {create_tables} = require('./create-tables')
const {create_procedures} = require('./create-procedures')
const {register_user} = require('./register-user')
const express = require('express')

config()

const app = express()
app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/register', function (req, res) {
    register_user(req.body)
        .then(() => res.json({success: true}))
})

create_db()
    .then(() => console.log('Database created'))
    .then(() => create_tables())
    .then(() => console.log('Tables created'))
    .then(() => create_procedures())
    .then(() => console.log('Procedures created'))
    .then(() => app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`)))