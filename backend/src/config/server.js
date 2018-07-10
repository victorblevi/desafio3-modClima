const PORT = 3003

//imports
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//middleWares
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(PORT, function(){
    console.log(`Back-End is running on port ${PORT}.`)
})
module.exports = server