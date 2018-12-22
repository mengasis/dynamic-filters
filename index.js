var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var morgan = require('morgan')
var PORT = Number(process.env.PORT || 3000)
var counters = require('./lib/counters')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/build/'))

app.get('/api/v1/counters', function(req, res) {
  res.json(counters.all())
})

app.post('/api/v1/counter', function(req, res) {
  console.log(req.body)
  res.json(counters.create(req.body.title))
})

app.delete('/api/v1/counter', function(req, res) {
  res.json(counters.delete(req.body.id))
})

app.post('/api/v1/counter/inc', function(req, res) {
  res.json(counters.inc(req.body.id))
})

app.post('/api/v1/counter/dec', function(req, res) {
  res.json(counters.dec(req.body.id))
})

app.listen(PORT, console.log.bind(null, 'PORT: ' + PORT))
