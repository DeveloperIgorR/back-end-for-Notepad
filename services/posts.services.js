class Posts{
    constructor(id,title){
        this.id = id
        this.title = title        
    }
}

let post1 = new Posts(1,'hi proger!')
let post2 = new Posts(2,'hi middle!')
let posts = [post1,post2] 

class PostsServices {
    
    static getPosts() {
        return new Promise((res, rej) => {
            res(posts)
        })
    }


}

module.exports = PostsServices