const express = require('express')
let app = express()
const port = 3000

const routes = require('./routes/index')
app.use('/api', routes)
app.use(express.json())

app.listen(port, () => console.log('Serwer Work'))