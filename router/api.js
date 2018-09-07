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

module.exports = router