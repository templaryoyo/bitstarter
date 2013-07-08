var express = require('express');
var buf = new Buffer(256);

var app = express.createServer(express.logger());

//buf = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
