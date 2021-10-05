class Users{
    constructor(id,name){
        this.id = id
        this.name = name        
    }
}

let user1 = new Users(1,'Pasha')
let user2 = new Users(2,'Igor')
let users = [user1,user2]

class UsersControllers{
    
    getUsers(){
        return users
    }

    getUsersById(id){
        let userById = users.find((user) => user.id == id)
        return userById
    }
}

module.exports = new UsersControllers()