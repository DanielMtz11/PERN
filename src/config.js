const {config} = require('dotenv');

config();

module.exports ={
    db:{
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.HOST,
        port: process.env.PORTDB,
        dataBase: process.env.DB,
    }
}