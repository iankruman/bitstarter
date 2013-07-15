var fs = require('fs');
var buffer = require('buffer');
var express = require('express');

var app = express.createServer(express.logger());

var indexBuffer = new Buffer(fs.readFileSync("index.html"));
var indexString = indexBuffer.toString();

app.get('/', function(request, response) {
  response.send(indexString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
