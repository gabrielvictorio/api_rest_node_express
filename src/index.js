const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./controlers/authController')(app)
require('./controlers/projectController')(app)

app.listen(3000, () => {
    console.log("Servidor de pé ouvindo na porta ${3000}")
})