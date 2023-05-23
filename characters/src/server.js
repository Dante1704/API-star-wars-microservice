const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes"));

//cuando caigo en una ruta que no existe, entra acá
server.use("*", (req,res) => {
    res.status(404).send("Not Found")
})

//Este es el manejador de errores donde caen todos ellos.
//Reemplaza al manejador de errores por defecto que tiene express.
//De esta manera puedo elegir que hacer con ellos.
server.use((err, req, res, next) => {
    //aca le indico que si no es un error manejado por mi, que sea un 500
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message})
})



module.exports = server;
