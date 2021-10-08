const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UsersControllers = require('../controllers/users.controllers')
const UsersServices = require('../services/objects.services')

async function login(data) {
    const {email, password} =  data
    const user = await UsersServices.getOneUser(email)
    if(user) {
        const compareUser = await bcrypt.compare(password, user.password)
        const {id} = user.dataValues
        if(compareUser) {
            const token = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET)
            return token
        }
    }
}

router.get('/', login(), async (req, res) => {
    try {
        let users = await UsersControllers.getUsers()
        res.send(users)
    }
    catch (e) {
        console.log(e)
    }

})
router.get('/:id', (req, res) => {
    try {
        const user = UsersControllers.getUsersById(req.params.id)
        res.send(user)
    }
    catch (e) {
        console.log(e)
    }

})
router.post('/create')
router.put('/edit')
router.delete('/delete')

module.exports = router