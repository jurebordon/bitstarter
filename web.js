var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer(256);

app.get('/', function(request, response) {
  but = fs.readFileSync('./index.html');
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
