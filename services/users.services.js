class Users {
    constructor(id, name, email, password) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }
}

let user1 = new Users(1, 'Pasha', 'proger@com', 1234)
let user2 = new Users(2, 'Igor', 'middle@com', 1234)
let users = [user1, user2]

class UsersServices {
    static getUsers() {
        return new Promise((res, rej) => {
            res(users)
        })
    }

    static getUserByEmail(email) {
        return new Promise((res, rej) => {
            let userEmail = users.find(user => user.email == email)
            res(userEmail)
        })
    } 
    
    static createUser({email, password, id, name}){
        return new Promise((res,rej) => {
            let user = {email, password, id, name}
            res(user)
        })
    }

}

module.exports = UsersServices