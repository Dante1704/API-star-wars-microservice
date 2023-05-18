const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes/index"));
server.use("*", (req,res) => {
    res.status(404).send("Not Found")
})

server.use((err, req, res, next) => {
    //aca le indico que si no es un error manejado por mi, que sea un 500
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message})
})

module.exports = server;
