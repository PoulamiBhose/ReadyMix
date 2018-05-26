const express = require('express')
//const mongoose = require('mongoose')
const helmet = require('helmet')
const bodyParser = require('body-parser')
//const morgan = require('morgan')
const bluebird = require('bluebird')
const fs = require('fs')
const rfs = require('rotating-file-stream')
const path = require('path')
const expressBunyan = require('express-bunyan-logger')

const config = require('./config')
const routes = require('./routes')

const app = express()
var logDirectory = path.join(__dirname, 'log')

// create a rotating write stream
var accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})

//mongoose.Promise = bluebird
//mongoose.connect(config.mongo.url)

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//app.use(morgan('common', {stream: accessLogStream}))
app.use(expressBunyan({
  name: 'Ready-Mix',
  streams: [{
      level: 'info',
      stream: accessLogStream
      }]
  }))

////var log = app.createLogger({name: 'Ready-Mix'})

//log.info('App Start')

app.use('/', routes)

app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`)
})

module.exports = app
