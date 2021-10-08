const express = require('express')
const bodyParser = require('body-parser')

let app = express()
const port = 3000

const routes = require('./routes/index')
app.use('/api', routes)
app.use(bodyParser.json())

app.listen(port, () => console.log('Serwer Work'))