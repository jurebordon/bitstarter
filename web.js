var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer(256);

app.get('/', function(request, response) {
  buf = fs.readFileSync('./index.html');
  var data = buf.toString('utf-8');
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
