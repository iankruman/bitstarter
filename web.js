var buffer = require('buffer');
var express = require('express');

var app = express.createServer(express.logger());

var indexBuffer = new Buffer(fs.readFileSync("index.html"));
var indexString = buf.toString();

app.get('/', function(request, response) {
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
