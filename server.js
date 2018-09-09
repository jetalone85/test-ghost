const express = require('express')
var morgan = require('morgan')
var helmet = require('helmet')
var compression = require('compression')
var AWS = require("aws-sdk");
var skills = require('./src/Skills');
var abilities = require('./src/Abilities');

const app = express()

app.use(morgan('combined'))
app.use(helmet())
app.use(compression())
app.set('view engine', 'pug')

AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', {
        error: err
    })
}

var api = require('./router/api')
app.use('/api', api)

app.use('/assets', express.static('public/assets/'))

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hey',
        message: 'Hello there!',
        abilities: abilities.get(),
        skills: skills.get()
    })
})

app.get('/healthz', (req, res) => res.send('ok!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))