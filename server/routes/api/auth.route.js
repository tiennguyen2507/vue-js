const express = require('express')
const jsonwebtoken = require('jsonwebtoken')
const routes = express.Router()
const { myRespone } = require('../../helper/index')
const users = require('../../model/users.model')
const {verifyToken} = require('../../midleware/auth')

//check token
routes.get('/checkToken', verifyToken, async (req, res) => {
    try {
        const user = await users.find((e) => e.userID === req.userID)
        if (!user)  return res.status(401).json(myRespone(false, 'Người dùng không tồn tại!'))
        return res.json(myRespone(true, 'Đã tìm thấy người dùng!',user.gmail))
    } catch (error) {
        res.json({
            success: false,
            message: 'lỗi sever!'
        })
    }
})

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

        const token = jsonwebtoken.sign({userID:userLogin.userID},'passJsonWebToken',{expiresIn:'60m'})
        //login sussess
        return res.status(200).json(
            myRespone(true, 'Đăng nhập thành công!', {gmail,token}))
    } catch (error) {
        res.status(500).json(myRespone(false, error.message))
    }
})




module.exports = routes