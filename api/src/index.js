const {config} = require('dotenv')
const {create_db} = require('./create-db')
const {create_tables} = require('./create-tables')
const {create_procedures} = require('./create-procedures')
const {create_functions} = require('./create-functions')
const {create_triggers} = require('./create-triggers')
const {populate_tables} = require('./populate-tables')
const {register_user} = require('./register-user')
const {login_user} = require('./login-user')
const {add_user_game} = require('./add-user-game')
const {add_review} = require('./add-review')
const {add_game} = require('./add-game')
const {add_category} = require('./add-category')
const {add_comment} = require('./add-comment')
const {delete_game} = require('./delete-game')
const {delete_comment} = require('./delete-comment')
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
        .catch(err => res.json({success: false, err}))
})

app.post('/login', function (req, res) {
    login_user(req.body)
        .then(should_login => {
            if (should_login) {
                res.json({success: true})
            } else {
                res.status(401).json({success: false})
            }
        })
        .catch(err => res.json({success: false, err}))
})

app.post('/add_user_game', function (req, res) {
    add_user_game(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.json({success: false, err}))
})

app.post('/add_review', function (req, res) {
    add_review(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.json({success: false, err}))
})

app.post('/add_game', function (req, res) {
    add_game(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.json({success: false, err}))
})

app.post('/add_category', function (req, res) {
    add_category(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.json({success: false, err}))
})

app.post('/add_comment', function (req, res) {
    add_comment(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.json({success: false, err}))
})

app.delete('/delete_game/:game_id', function (req, res) {
    delete_game(req.params)
        .then(() => res.json({success: true}))
        .catch(err => res.json({success: false, err}))
})

app.delete('/delete_comment/:comment_id', function (req, res) {
    delete_comment(req.params)
        .then(() => res.json({success: true}))
        .catch(err => res.json({success: false, err}))
})

create_db()
    .then(() => console.log('Database created'))
    .then(() => create_tables())
    .then(() => console.log('Tables created'))
    .then(() => create_procedures())
    .then(() => console.log('Procedures created'))
    .then(() => create_functions())
    .then(() => console.log('Functions created'))
    .then(() => create_triggers())
    .then(() => console.log('Triggers created'))
    .then(() => populate_tables())
    .then(() => console.log('Tables populated'))
    .then(() => app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`)))