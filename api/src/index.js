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
const {get_games_count} = require('./get-games-count')
const {get_games} = require('./get-games')
const {get_comments} = require('./get-comments')
const {user_reviewed_game} = require('./user-reviewed-game')
const {get_game_average_reviews} = require('./get-game-average-reviews')
const {get_categories} = require('./get-categories')
const express = require('express')

config()

const app = express()

app.use(express.json())

app.post('/register', function (req, res) {
    register_user(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json({success: false, err}))
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
        .catch(err => res.status(500).json({success: false, err}))
})

app.post('/add_user_game', function (req, res) {
    add_user_game(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.post('/add_review', function (req, res) {
    add_review(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.post('/add_game', function (req, res) {
    add_game(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.post('/add_category', function (req, res) {
    add_category(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.post('/add_comment', function (req, res) {
    add_comment(req.body)
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.delete('/delete_game/:game_id', function (req, res) {
    delete_game(req.params)
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.delete('/delete_comment/:comment_id', function (req, res) {
    delete_comment(req.params)
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.get('/games_count', function (req, res) {
    get_games_count()
        .then(count => res.json({success: true, count}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.get('/games', function (req, res) {
    get_games(req.query)
        .then(games => res.json({success: true, games}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.get('/comments/:game_id', function (req, res) {
    get_comments(req.params)
        .then(comments => res.json({success: true, comments}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.get('/user_reviewed_game/:user_id/:game_id', function (req, res) {
    user_reviewed_game(req.params)
        .then(reviewed => res.json({success: true, reviewed: !!reviewed}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.get('/average_reviews/:game_id', function (req, res) {
    get_game_average_reviews(req.params)
        .then(average_reviews => res.json({success: true, average_reviews}))
        .catch(err => res.status(500).json({success: false, err}))
})

app.get('/categories', function (req, res) {
    get_categories()
        .then(categories => res.json({success: true, categories}))
        .catch(err => res.status(500).json({success: false, err}))
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