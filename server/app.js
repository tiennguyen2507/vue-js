const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

//use routes
app.use('/api', require('./routes'))


module.exports = app
