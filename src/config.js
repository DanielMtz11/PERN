const {config} = require('dotenv');

config();

module.exports ={
    db:{
        user: process.env.BD_USER,
        password: process.env.BD_PASS,
        host: process.env.HOST,
        port: process.env.PORT,
        dataBase: process.env.DB,
    }
}