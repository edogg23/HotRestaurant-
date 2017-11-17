var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT, function(err, res) {
	console.log("Listening on: " + PORT);
})