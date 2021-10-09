const PostsServices = require("../services/posts.services")

class PostsControllers{
    async getNewPosts(){
        let posts = await PostsServices.getPosts()
        return posts
    }

    getPostByID(id){
        let postById = posts.find(post => post.id == id)
        return postById
    }
}

module.exports = new PostsControllers()