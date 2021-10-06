const express = require('express')
const router = express.Router()
const UsersControllers = require('../controllers/users.controllers')

router.get('/', async (req, res) => {
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