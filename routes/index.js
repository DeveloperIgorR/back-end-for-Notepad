const express = require('express')
const router = express.Router()
const postsRoutes = require('./posts')
const usersRoutes = require('./users')

router.use('/posts', postsRoutes)
router.use('/users', usersRoutes)

module.exports = router