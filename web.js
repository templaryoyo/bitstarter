var express = require('express');

var app = express.createServer(express.logger());

fs = require('fs');
var buf = new Buffer(256);
buf = fs.readFileSync('./index.html');
var content = buf.toString();
app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
