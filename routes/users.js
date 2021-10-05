const express = require('express')
const router = express.Router()
const UsersControllers = require('../controllers/users.controllers')

router.get('/')
router.get('/:id', (req, res) => {
    const user = UsersControllers.getUsersById(req.params.id)
    res.send(user) 
})
router.post('/create')
router.put('/edit')
router.delete('/delete')

module.exports = router