const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const history = require('connect-history-api-fallback')

let app = express()

app.use(history())
app.use(serveStatic(__dirname))

var port = process.env.PORT || 5000

app.listen(port)

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '/index.html'))
})
