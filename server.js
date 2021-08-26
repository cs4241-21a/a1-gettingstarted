const { send } = require('process')

const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  if (request.url[request.url.length - 1] == '/'){
    request.url += "index.html";
  }
  if (request.url[0] == '/'){
    request.url = request.url.substr(1, request.url.length);
  }
  findFile(response, request.url);
})

server.listen( process.env.PORT || port )

const findFile = function( response, filename ) {
  fs.readFile( filename, function( err, content ) {
    if (err){
      console.log(filename);
      console.log(err);
      response.end('404 Error: File Not Found');
    }
    else{
      response.end(content, 'utf-8');
    }
  })
}
