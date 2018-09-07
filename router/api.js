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
        JSON.stringify(
            [{
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
            }]
        )
    );
})


router.get('/skills', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(
        JSON.stringify(
            [{
                    name: 'Blefowanie',
                    code: 'blef',
                    value1: null,
                    value2: null,
                    value3: 12,
                    value4: null,
                    ability: 'CHA',
                },
                {
                    name: 'Ciche poruszanie',
                    code: 'cich',
                    value1: null,
                    value2: null,
                    value3: 15,
                    value4: 4,
                    ability: 'ZR',
                },
                {
                    name: 'Czarostwo',
                    code: 'czar',
                    value1: null,
                    value2: null,
                    value3: 12,
                    value4: 2,
                    ability: 'INT',
                },
                {
                    name: 'Dyplomacja',
                    code: 'dyplo',
                    value1: null,
                    value2: null,
                    value3: 8,
                    value4: 0,
                    ability: 'CHA',
                },
                {
                    name: 'Fałszerstwo',
                    code: 'falsz',
                    value1: null,
                    value2: null,
                    value3: 0,
                    value4: 4,
                    ability: 'INT',
                },
                {
                    name: 'Jeździectwo',
                    code: 'jezdz',
                    value1: null,
                    value2: null,
                    value3: 6,
                    value4: 2,
                    ability: 'ZR',
                },
                {
                    name: 'Koncentracja',
                    code: 'konc',
                    value1: null,
                    value2: null,
                    value3: 15,
                    value4: 10,
                    ability: 'BD',
                },
                {
                    name: 'Leczenie',
                    code: 'lecz',
                    value1: null,
                    value2: null,
                    value3: 15,
                    value4: 2,
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
        )
    );
})

module.exports = router