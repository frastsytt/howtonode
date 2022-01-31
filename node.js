var http = require('http'); //require the built-in http module
var dt = require('./module.js'); //require the module that i created that returns the current date
var url = require('url');
var fs = require('fs');

//create a server object
http.createServer(function (req, res) {
  fs.readFile('demofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //reponse header
    res.write(data);
    return res.end();
  });
  //res.write('The current date and time is: ' + dt.myDateTime() + '\n'); //the written reponse to the client
  //res.write(req.url);
  //var q = url.parse(req.url, true).query;
  //var txt = q.year + " " + q.month;
  //res.end(txt); //end of the response (must always be here)
}).listen(8080); //the server object listens on port 8080
