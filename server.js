const http = require('http'),
      fs   = require('fs'),
      path = require('path'),
      port = 3000

const server = http.createServer( function( request,response ) {
  fs.readFile(__dirname + request.url, function (err,data) {
    if (err) {
      response.writeHead(404);
      response.end(JSON.stringify(err));
      return;
    }
    response.writeHead(200);
    response.end(data);
  });
})

server.listen( process.env.PORT || port )