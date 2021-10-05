const express = require('express')
const router = express.Router()

class Users{
    constructor(id,name){
        this.id = id
        this.name = name        
    }
}

let user1 = new Users(1,'Pasha')
let user2 = new Users(2,'Igor')
let users = [user1,user2]

module.exports = router