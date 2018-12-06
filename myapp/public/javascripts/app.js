$(document).ready(function() {
    $('.selector-inner').click(function () {
        console.log($(this));
        $('.inputPeg').css('background-color', 'pink');
    });
    
    var express = require("express");
    var http = require("http");
    
    var port = process.argv[2];
    var app = express();
    
    app.use(express.static(__dirname + "/public"));
    http.createServer(app).listen(port);
});
