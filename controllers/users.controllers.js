const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
require('dotenv/config')

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

    async registration(data){
        const {email, password, id, name} = data
        let hashedPassword = await bcrypt.hash(password, saltRounds)
        const user = await UsersServices.createUser({
            email,
            password:hashedPassword,
            id,
            name,
        })
        return user
    }

    async login(data) {
        const {email, password} =  data
        const user = await UsersServices.getUserByEmail(email)
        if(user) {
            let hashedPassword = await bcrypt.hash(String(user.password), saltRounds)
            console.log(hashedPassword)
            const compareUser = await bcrypt.compare(password, hashedPassword)
            console.log(compareUser)           
            const {id} = user.id            
            if(compareUser) {
                const token = await jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET)
                 console.log(token)
                return token
               
            }
        }
    }
}

module.exports = new UsersControllers()