var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser');
var AWS = require("aws-sdk");

router.use(bodyParser.urlencoded({
    extended: false
}))
router.use(bodyParser.json())

AWS.config.update({
    region: "eu-west-2",
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();

router.get('/', function(req, res) {
    res.send('API')
})

// router.get('/character', function(req, res) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(
//         JSON.stringify({
//             name: 'Valkhis',
//             classes: 'Kapłan',
//             level: 12,
//             race: 'Elf',
//             chatacter: 'Chaotyczny neutralny',
//             sex: 'Męska'
//         })
//     );
// })

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

router.post('/abilities/update', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(
        JSON.stringify(
            [{
                response: "response data"
            }]
        ));
});

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

router.get('/character', function(req, res) {

    var params = {
        TableName: "Characters",
        Key: {
            "id": 1
        },
    }

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to get Character. Error JSON:", JSON.stringify(err, null, 2))
        } else {
            res.send(data.Item)
        }
    })
})

router.post('/character', function(req, res) {
    var params = {
        TableName: "Characters",
        Item: {
            "id": req.body.id,
            "name": req.body.name,
            "classes": req.body.classes,
            "level": req.body.level,
            "race": req.body.race,
            "chatacter": req.body.chatacter,
            "sex": req.body.sex
        }
    }

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to update Character. Error JSON:", JSON.stringify(err, null, 2))
        } else {
            res.send(data)
        }
    })
})

router.post('/character/single', function(req, res) {

    console.log(req.body)

    var params = {
        TableName: "Characters",
        Key: {
            "id": 1
        },
        UpdateExpression: "set #variable = :x",
        ExpressionAttributeNames: {
            "#variable": req.body.name
        },
        ExpressionAttributeValues: {
            ":x": req.body.value
        }
    }

    console.log(params)

    docClient.update(params, function(err, data) {
        if (err) {
            console.error("Unable to update Character. Error JSON:", JSON.stringify(err, null, 2))
        } else {
            res.send(data)
        }
    })
})
module.exports = router