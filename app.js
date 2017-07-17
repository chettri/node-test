/* main file */

var express = require("express");
var app = express();
var port = 3500;

app.get('/', function (req, res){
	res.send("hi i am here as a root")
});

app.get('/books', function (req, res){
	res.send("Hi I am a book")
})

app.listen(port, function (err){
	console.log("running on port" + port);
})
