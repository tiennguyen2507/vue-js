const express = require('express')
const routes = express.Router()
const { myRespone } = require('../../helper/index')
const users = require('../../model/users.model')



//get all data user
routes.get('/', (req, res) => {
    res.status(200).json(myRespone(true, 'Lấy danh sách user thành công!', users))
})




module.exports = routes