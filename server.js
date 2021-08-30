const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      sendFile( response, 'images/computers-1227142.jpg' )
      sendFile( response, 'styles/myStyle.css')
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/link.html':
      sendFile( response, 'link.html')
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}
