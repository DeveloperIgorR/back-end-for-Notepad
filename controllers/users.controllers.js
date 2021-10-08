const UsersServices = require("../services/objects.services")

class UsersControllers{
    
    async getUsers(){
        let users = await UsersServices.getUsers()
        return users
    }

    getUsersById(id){
        let userById = users.find(user => user.id == id)
        return userById
    }
}

module.exports = new UsersControllers()