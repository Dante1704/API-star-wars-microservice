const express = require('express')
const morgan = require('morgan')
const app = express()


app.use(morgan('dev'))

app.use(express.json()) // sin esto o el body parser no se pueden leer contenidos que vengan por body

app.use(require('./routes/index'))

app.use("*", (req,res) => {
    res.status(404).send("Not Found")
})

app.use((err, req, res, next) => {
    //aca le indico que si no es un error manejado por mi, que sea un 500
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message})
})

module.exports = app