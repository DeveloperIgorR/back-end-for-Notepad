const express = require('express')
const router = express.Router()
const PostsControllers = require('../controllers/posts.controllers')

router.get('/', async (req, res) => {
    try {
        const posts = await PostsControllers.getNewPosts()
        res.send(posts)
    }
    catch (e) {
        console.log(e)
    }

})

router.get('/:id', (req, res) => {
    try {
        const post = PostsControllers.getPostByID(req.params.id)
        res.send(post)
    }
    catch (e) {
        console.log(e)
    }

})
router.post('/create')
router.put('/edit')
router.delete('/delete')

module.exports = router