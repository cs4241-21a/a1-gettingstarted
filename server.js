const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  // switch( request.url ) {
  //   case '/':
  //     sendFile( response, 'index.html' )
  //     break
  //   case '/index.html':
  //     sendFile( response, 'index.html' )
  //     break
  //   default:
  //     response.end( '404 Error: File Not Found' )
  // }
  sendFile( response, request.url)

})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  filename = filename.substring(1)
   fs.readFile( filename, function( err, content ) {
     if(err){
      response.end( '404 Error: File Not Found' )
     }
     else{
      response.end( content, 'utf-8' )
     }
   })
}
