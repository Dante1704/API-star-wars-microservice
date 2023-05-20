const express = require('express')
const morgan = require('morgan')
const app = express()


app.use(morgan('dev'))

app.use(express.json()) // sin esto o el body parser, no se pueden leer contenidos que vengan por body


app.use(require('./routes/index'))

module.exports = app