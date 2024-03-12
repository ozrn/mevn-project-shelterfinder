const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
require('./mongodb-connection')

const survivorRouter = require('./routes/survivor')
const shelterRouter = require('./routes/shelter')
const stockRouter = require('./routes/stock')

const app = express()

app.use(cors({ credentials: true, origin: true, methods: ['POST', 'GET', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'] }))


app.use(bodyParser.json())
app.set('view engine', 'pug')

app.use('/survivor', survivorRouter)
app.use('/shelter', shelterRouter)
app.use('/stock', stockRouter)

app.get('/', (req, res) => {
    res.render('index')
})

module.exports = app


