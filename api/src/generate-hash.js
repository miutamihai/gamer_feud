const {hash_password} = require('./hash-password')

console.log(hash_password(process.argv[2]))