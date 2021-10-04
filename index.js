const express = require('express')
let app = express()

const port = 3000

const posts = [{id:Date.now(),title: 'Hello'},
{id:Date.now(),title: 'Hi'},
{id:Date.now(),title: 'Il va bien'}]

app.use('/posts', (req,res) => res.send(posts))

app.listen(port, () => console.log('GO'))