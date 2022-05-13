const express = require('express')
const routes = express.Router()
const { myRespone } = require('../../helper/index')

//list user
const users = [
    {
        gmail: 'admin@gmail.com',
        password: 'admin@gmail.com'
    },
    {
        gmail: 'tiennguyen2507@gmail.com',
        password: 'tiennguyen2507@gmail.com'
    }
]

//get all data user
routes.get('/', (req, res) => {
    res.status(200).json(myRespone(true, 'Lấy danh sách user thành công!', users))
})




module.exports = routes