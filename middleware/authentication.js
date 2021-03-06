const jwt = require('jsonwebtoken')
require('dotenv/config')

const authenticationToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader && authHeader.split('')[1]
        if(token == null){
            res.sendStatus(401)
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err){
                throw new Error('invalid token')
            }
            req.user = user
            next()
        })
    }
     catch (e) {
        res.sendStatus(403)
    }
}