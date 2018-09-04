const express = require('express')
const app = express()

var shouldRun = true;
var desiredLoadFactor = .5;

function blockCpuFor(ms) {
	var now = new Date().getTime();
	var result = 0
	while(shouldRun) {
		result += Math.random() * Math.random();
		if (new Date().getTime() > now +ms)
			return;
	}	
}

function start() {
	shouldRun = true;
	blockCpuFor(1000*desiredLoadFactor);
	setTimeout(start, 1000* (1 - desiredLoadFactor));

    return 0;
}

app.get('/', (req, res) => res.send('Hello World!!! Pańcia jest malutka!' + start()))

app.listen(3000, () => console.log('Example app listening on port 3000!'))