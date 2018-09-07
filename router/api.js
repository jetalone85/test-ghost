var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.send('API')
})

router.get('/character', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(
        JSON.stringify({
            name: 'Valkhis',
            classes: 'Kapłan',
            level: 12,
            race: 'Elf',
            chatacter: 'Chaotyczny neutralny',
            sex: 'Męska'
        })
    );
})

router.get('/abilities', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(
        JSON.stringify([{
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
        }])
    );
})

module.exports = router