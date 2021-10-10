const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UsersServices = require("../services/users.services")

class UsersControllers{
    
    async getUsers(){
        let users = await UsersServices.getUsers()
        return users
    }

    async getOneUser(email){
        let user = await UsersServices.getUserByEmail(email)
        return user
    }

    async login(data) {
        const {email, password} =  data
        const user = await UsersServices.getUserByEmail(email)
        if(user) {
            const compareUser = await bcrypt.compare(password, String(user.password))
            console.log(compareUser)
            const {id} = user.dataValues
            if(compareUser) {
                const token = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET)
                return token
            }
        }
    }
}

module.exports = new UsersControllers()