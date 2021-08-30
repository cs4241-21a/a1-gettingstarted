const http = require('http'),
      fs   = require('fs'),
      port = 3001

const server = http.createServer( function( request,response ) {
  sendFile( response, request.url)
  /*
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
  */
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  filename = filename.substring(1)
  if(filename === "") {
    filename = "index.html"
  }
   fs.readFile( filename, function( err, content ) {
     if (err) {
       response.end('404 Error: File not Found')
     }else{
      response.end( content, 'utf-8' )
     }
   })
}
