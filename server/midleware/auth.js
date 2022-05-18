const { myRespone } = require('../helper')
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.header('Authorization')
        const token = authHeader && authHeader.split(' ')[1]
        console.log(token)
        if (!token) {
            return res.status(401).json(myRespone(false, 'Không tìm thấy token!'))
        }

        const verifyToken = jwt.verify(token, 'passJsonWebToken')
        if (verifyToken) {
            req.userID = verifyToken.userID
            next()
        }
    } catch (error) {
        return res.status(401).json(myRespone(false, error.message))
    }

}

module.exports = { verifyToken }