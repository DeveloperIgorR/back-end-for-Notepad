class UsersServices {
    static getUsers(){
        return new Promise((res, rej) => {
            res({id:1, name:'Igor', programmer: true})
        }) 
    } 
     getPosts(){
        return new Promise((res, rej) => {
            res([{id:1, title:'Hi man'},{id:2, title:'Hello proger'}])
        })
    }
    
} 

module.exports =  UsersServices