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
            value1: 0,
            value2: null,
            value3: null,
            value4: null,
        }, {
            name: 'ZR',
            value1: 0,
            value2: null,
            value3: null,
            value4: null,
        }, {
            name: 'BD',
            value1: 0,
            value2: null,
            value3: null,
            value4: null,
        }, {
            name: 'INT',
            value1: 0,
            value2: null,
            value3: null,
            value4: null,
        }, {
            name: 'RZT',
            value1: 0,
            value2: null,
            value3: null,
            value4: null,
        }, {
            name: 'CHA',
            value1: 0,
            value2: null,
            value3: null,
            value4: null,
        }],
        skills: [{
                name: 'Blefowanie',
                code: 'blef',
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                ability: 'CHA',
            },
            {
                name: 'Ciche poruszanie',
                code: 'cich',
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                ability: 'ZR',
            },
            {
                name: 'Czarostwo',
                code: 'czar',
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                ability: 'INT',
            },
            {
                name: 'Dyplomacja',
                code: 'dyplo',
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                ability: 'CHA',
            },
            {
                name: 'Fałszerstwo',
                code: 'falsz',
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                ability: 'INT',
            },
            {
                name: 'Jeździectwo',
                code: 'jezdz',
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                ability: 'ZR',
            },
            {
                name: 'Koncentracja',
                code: 'konc',
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                ability: 'BD',
            },
            {
                name: 'Leczenie',
                code: 'lecz',
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                ability: 'RZT',
            },
            {
                name: 'Nasłuchiwanie',
                code: 'nasl',
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