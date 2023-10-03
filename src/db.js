// const {config} = require ('dotenv');

// config(); 
// const {Pool}= require('pg');

// const pool = new Pool({
//     // user: "postgres",
//     // password:"root",
//     // host: "localhost",
//     // port: 5432,
//     // database: "taskdb"
// });


// module.exports= pool



const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

// console.log(process.env.POSTGRES_URL)

pool.connect((e)=>{
    if(e) throw e
    console.log("Connect to PostgreSQL successfully!")
})

module.exports = pool