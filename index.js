const express = require('express')
let app = express()

const posts = [{id:Date.now(),title: 'Hello'},
{id:Date.now(),title: 'Hi'},
{id:Date.now(),title: 'Il va bien'}]

const port = 3000

app.use('/posts', (req,res) => res.send(posts))

app.listen(port, () => console.log('GO'))