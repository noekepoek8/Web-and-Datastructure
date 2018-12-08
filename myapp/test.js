var express = require("express");
var http = require("http");

var port = process.argv[2];
var app = express();

app.get('/', function(req, res) {
    res.sendFile('splash.html', {root: "./public"});
});

app.get('/game/:id', function(req, res) {
    res.send('you requested to see a profile with the id of ' + req.params.id);
});

app.use(express.static(__dirname + "/public"));
http.createServer(app).listen(port);


