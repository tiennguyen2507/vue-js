const express = require('express')
const routes = express.Router()
const { myRespone } = require('../../helper/index')
const users = require('../../model/users.model')



//user login
routes.post('/login', (req, res) => {
    try {
        const {gmail, password} = req.body
        //check where no gmail
        if (!gmail) {
            return res.status(401).json(myRespone(false, 'Gmail trống!'))
        }

        if (!password) {
            return res.status(401).json(myRespone(false, 'Mật khẩu trống!'))
        }

        const userLogin = users.find((e) => e.gmail === gmail)

        if (!userLogin) {
            return res.status(401).json(myRespone(false, 'Người dùng không tồn tại!'))
        }

        if (password !== userLogin?.password) {
            return res.status(401).json(myRespone(false, 'Mật khẩu không chính xác!'))
        }

        //login sussess
        return res.status(200).json(
            myRespone(true, 'Đăng nhập thành công!', {token:'token'}
            ))
    } catch (error) {
        res.status(500).json(myRespone(false, error.message))
    }
})




module.exports = routes