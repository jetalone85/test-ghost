const express = require('express')
var morgan = require('morgan')
var helmet = require('helmet')
var compression = require('compression')

const app = express()

app.use(morgan('combined'))
app.use(helmet())
app.use(compression())

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', {
    error: err
  })
}

app.use('/', express.static('public'))

app.get('/healthz', (req, res) => res.send('ok!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))