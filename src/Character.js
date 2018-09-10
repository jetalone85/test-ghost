exports.get = function(id) {

    console.log('run function')

    var AWS = require("aws-sdk")
    AWS.config.update({
        region: "eu-west-2",
        accessKeyId: 'accessKeyId',
        secretAccessKey: 'secretAccessKey',
        endpoint: "http://localhost:8000"
    })
    var docClient = new AWS.DynamoDB.DocumentClient()

    var params = {
        TableName: "Characters",
        Key: {
            "id": 1
        },
    }

    console.log('prepare')
    docClient.get(params, function(err, data) {

        console.log('run get query')
        if (err) {
            console.error("Unable to make query. Error JSON:", JSON.stringify(err, null, 2))
        } else {
            console.log('OK!')
            return data.Item
        }
    })
}