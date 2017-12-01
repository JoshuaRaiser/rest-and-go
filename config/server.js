// porta servidor backend
const port = 3003

// constantes
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// para toda requisição que chegar, ela passará por esses middleware
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.listen(port, function(){
  console.log(`BACKEND está rodando na porta ${port}`)
})

module.exports = server
