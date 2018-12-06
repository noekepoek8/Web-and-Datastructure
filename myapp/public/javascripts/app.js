$(document).ready(function() {
    $('.selectionBtn').click(function () {
        console.log($(this));
        let color = $(this).css('background-color');
        console.log(color);
        $('.inputPeg').css('background-color', 'pink');
    });

    // var express = require("express");
    // var http = require("http");
    
    // var port = process.argv[2];
    // var app = express();
    
    // app.use(express.static(__dirname + "/public"));
    // http.createServer(app).listen(port);
});
