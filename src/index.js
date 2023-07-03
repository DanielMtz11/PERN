const express = require("express");
const morgan = require("morgan");
const taskRouter = require("./routes");
const errorMessage = require("./middlewares/error");

const cors = require('cors');

const app = express();

// CORS es el acrónimo de Cross-Origin Resource Sharing (Compartir recursos de origen cruzado). Es un mecanismo de seguridad utilizado por los navegadores web para permitir que un sitio web solicite recursos (como datos, imágenes o scripts) desde otro dominio fuera de su propio dominio de origen.
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// app.use((err, req, res, next)=>{
//     return res.json({
//         message: err.message })});
        
taskRouter(app);

errorMessage(app);

app.listen(4000);
console.log("server port 4000");