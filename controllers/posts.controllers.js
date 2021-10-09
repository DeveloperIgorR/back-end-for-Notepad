const PostsServices = require("../services/posts.services")

class PostsControllers{
    async getNewPosts(){
        return await PostsServices.getPosts()
    }

    getPostByID(id){
        let postById = posts.find(post => post.id == id)
        return postById
    }
}

module.exports = new PostsControllers()