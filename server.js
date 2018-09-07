const express = require('express')
var morgan = require('morgan')
var helmet = require('helmet')
var compression = require('compression')

const app = express()

app.use(morgan('combined'))
app.use(helmet())
app.use(compression())
app.set('view engine', 'pug')

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
        abilities: [{
            name: 'S',
            value1: 16,
            value2: null,
            value3: 20,
            value4: null,
        }, {
            name: 'ZR',
            value1: 22,
            value2: null,
            value3: null,
            value4: null,
        }, {
            name: 'BD',
            value1: 16,
            value2: null,
            value3: null,
            value4: null,
        }, {
            name: 'INT',
            value1: 22,
            value2: null,
            value3: null,
            value4: null,
        }, {
            name: 'RZT',
            value1: 26,
            value2: null,
            value3: null,
            value4: null,
        }, {
            name: 'CHA',
            value1: 22,
            value2: null,
            value3: null,
            value4: null,
        }],
        skills: [{
                name: 'Blefowanie',
                value1: null,
                value2: null,
                value3: 12,
                value4: null,
                ability: 'CHA',
            },
            {
                name: 'Ciche poruszanie',
                value1: null,
                value2: null,
                value3: 15,
                value4: 4,
                ability: 'ZR',
            },
            {
                name: 'Czarostwo',
                value1: null,
                value2: null,
                value3: 12,
                value4: 2,
                ability: 'INT',
            },
            {
                name: 'Dyplomacja',
                value1: null,
                value2: null,
                value3: 8,
                value4: 0,
                ability: 'CHA',
            },
            {
                name: 'Fałszerstwo',
                value1: null,
                value2: null,
                value3: 0,
                value4: 4,
                ability: 'INT',
            },
            {
                name: 'Jeździectwo',
                value1: null,
                value2: null,
                value3: 6,
                value4: 2,
                ability: 'ZR',
            },
            {
                name: 'Koncentracja',
                value1: null,
                value2: null,
                value3: 15,
                value4: 10,
                ability: 'BD',
            },
            {
                name: 'Leczenie',
                value1: null,
                value2: null,
                value3: 15,
                value4: 2,
                ability: 'RZT',
            },
            {
                name: 'Nasłuchiwanie',
                value1: null,
                value2: null,
                value3: 8,
                value4: 4,
                ability: 'RZT',
            },
        ]
    })
})

app.get('/healthz', (req, res) => res.send('ok!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))