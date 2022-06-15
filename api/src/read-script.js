const {readFile} = require('fs/promises')

const scripts_path = 'src/scripts'

const make_file_path = file => `${process.cwd()}/${scripts_path}/${file}.sql`

const read_script = script => readFile(make_file_path(script))
    .then(data => data.toString())

module.exports = {
    read_script
}