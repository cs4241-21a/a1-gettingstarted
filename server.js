const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  filename = request.url.substring(1);
  sendFile(response, filename);
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     if (err) {
       response.end( '404 Error: File Not Found' );
     }
     response.end( content, 'utf-8' );
   });
}
