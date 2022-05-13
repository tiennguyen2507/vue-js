const express = require('express')
const routes = express.Router()



routes.use('/user', require('./api/user.route'))


module.exports = routes