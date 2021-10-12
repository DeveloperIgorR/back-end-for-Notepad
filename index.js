const express = require('express')
const bodyParser = require('body-parser')
require('dotenv/config')

let app = express()
const port = process.env.PORT

const routes = require('./routes/index')
app.use(bodyParser.json())
app.use('/api', routes)


app.listen(port, () => console.log('Serwer Work'))
