var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser');
var AWS = require("aws-sdk");

var skills = require('../src/Skills');
var abilities = require('../src/Abilities');

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

router.get('/abilities', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(
        JSON.stringify(abilities.get())
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
        JSON.stringify(skills.get())
    );
})

router.get('/character', function(req, res) {

    var id = 1

    var Character = require('../src/Character');
    console.log()

    var promise1 = new Promise(function(resolve, reject) {

        console.log(resolve)
        console.log(reject)

        console.log(Character.get())
        res.send('OK!')
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