
var express = require('express');
var http = require('http');
var app = express();

app.get('/', function (req, res) 
{
	var data = 
	{ };
	res.json(data);
});

app.get('/workout.api', function (req, res) 
{
	console.log('request test');
	console.log(req.body);
	var data = { test, test };
	res.json(data);
});

app.post('/workout.api', function(req, res) {
			console.log('request test');
			console.log(req.body);
	
			var data = {test, test	};
			aes.json(data);
		})

http.createServer(app).listen(8080, function()
		{
			console.log('listen');
		});
