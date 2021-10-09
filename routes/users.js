const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UsersControllers = require('../controllers/users.controllers')
const UsersServices = require('../services/users.services')

router.get('/', async (req, res) => {
    try {
        let users = await UsersControllers.getUsers()
        res.send(users)
    }
    catch (e) {
        console.log(e)
    }

})
router.get('/:email',async (req, res) => {
    try {
        const user = await UsersControllers.getOneUser(req.params.email)
        res.send(user)
    }
    catch (e) {
        console.log(e)
    }

})

router.post('/login', async (req, res) => {
    try {
        const resData = await UsersControllers.login(req.body)
        res.json(resData)
    }
    catch (e) {
        res.json({ message: e.message })
    }
})

router.put('/edit/:id',(req, res) => {
    try {
        console.log(req.params.id)
        console.log(req.body)
    } 
    catch (e) {
        console.log(e)
    }
})

router.delete('/delete/:id',(req, res) => {
    try {
        console.log(req.body)
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router