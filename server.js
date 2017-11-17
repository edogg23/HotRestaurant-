var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var people = [

{
	"name": "Ernest",
	"phone": "123-456-7890",
	"email": "Ernest@ernest.net",
	"uniqueID": "ernest123"
},

{
	"name": "Ryan",
	"phone": "123-348-7328",
	"email": "ryan@ryan.net",
	"uniqueID": "ernest123"
},

{
	"name": "Steve",
	"phone": "123-456-7890",
	"email": "steve@ernest.net",
	"uniqueID": "stevet123"
},

{	"name": "Scott",
	"phone": "123-456-7890",
	"email": "Scott@ernest.net",
	"uniqueID": "scott.123"
}];


var Reservation = function(name, phone, email, uniqueID) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.uniqueID = uniqueID;
}

var Waitlist = function(name, phone, email, uniqueID) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.uniqueID = uniqueID;
}

var reservationArray = [];

var waitlistArray = [];

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res){
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res){
	res.sendFile(path.join(__dirname, "reserve.html"));
});


app.get("/api", function(req, res) {
	res.json(people);
});

app.listen(PORT, function(err, res) {
	console.log("Listening on: " + PORT);
});

