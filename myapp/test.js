var express = require("express");
var http = require("http");

var port = process.argv[2];
var app = express();

app.get('/', function(req, res) {
    res.sendFile('splash.html', {root: "./public"});
});

app.get('/game', function(req, res) {
    res.sendFile('game.html', {root: "./public"});
});

app.use(express.static(__dirname + "/public"));
http.createServer(app).listen(port);




