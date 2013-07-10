var express = require('express');

var fs = require('fs');

fs.readFile('index.html','utf-8',function read(err,data){
    if(err){
	return console.log(err);
    }
//   content = data;
    var buffer = new Buffer(data,"utf-8");
});


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
