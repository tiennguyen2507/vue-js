const express = require('express')
const routes = express.Router()



routes.use('/user', require('./api/user.route'))
routes.use('/auth', require('./api/auth.route'))


module.exports = routes