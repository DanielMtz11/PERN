// this is the code to function in local:

// const {config} = require ('dotenv');

// config(); 
// const {Pool}= require('pg');

// const pool = new Pool({
//     user: "postgres",
//     password:"root",
//     host: "localhost",
//     port: 5432,
//     database: "taskdb"
// });
// module.exports= pool


// this is the code to function in production:

// const { Pool } = pg;
const {config} = require ('dotenv');
config(); 

const {Pool}= require('pg');


const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})
module.exports= pool