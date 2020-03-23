const path = require('path')

const express = require('express')
const favicon = require('express-favicon')

const port = process.env.port || 8080

const app = express()

app.use(favicon(__dirname + '/build/favicon,uci;'))

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', (req, res, next) => {
    return res.send('pong')
})

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port)
