class Users{
    constructor(id, name, email, password ){
        this.id = id
        this.name = name 
        this.email = email 
        this.password = password      
    }
}

let user1 = new Users(1,'Pasha','proger@com', 1234 )
let user2 = new Users(2,'Igor', 'middle@com', 1234 )
let users = [user1,user2]

class UsersServices {
    static getUsers(){
        return new Promise((res, rej) => {
            res(users)
        }) 
    } 

    static getOneUser(email){
        return new Promise((res,rej) => {
            res()
        })
    }

     getPosts(){
        return new Promise((res, rej) => {
            res([{id:1, title:'Hi man'},{id:2, title:'Hello proger'}])
        })
    }
    
} 

module.exports =  UsersServices