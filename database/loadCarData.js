var AWS = require("aws-sdk");
var fs = require('fs');
AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();
console.log("Importing Characters into DynamoDB. Please wait.");
var characters = JSON.parse(fs.readFileSync('charactersData.json', 'utf8'));
characters.forEach(function(character) {
    console.log(character)
    var params = {
        TableName: "Characters",
        Item: {
            "id": character.id,
        }
    };
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add Character", character.id, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", character.id);
        }
    });
});