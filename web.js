var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());
//var buffer = fs.readFileSync('index.html');
app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html','utf8'));
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
