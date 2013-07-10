var express = require('express');

var fs = require('fs');
var buffer = new Buffer(65555);
var size = 0;

var buffer = new Buffer(1024);

fs.readFile('index.html','utf-8',function read(err,data){
    if(err){
	return console.log(err);
    }
//   content = data;
    buffer.write(data,"utf-8");
    size = data.length;
});

var buffer2 = new Buffer(fs.readFileSync('index.html'),'utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer2.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
