const {Pool}= require('pg');
const {db} = require('./config');

const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port:5432,
    database: "taskdb"
});

module.exports= pool