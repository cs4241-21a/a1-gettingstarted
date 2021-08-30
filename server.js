const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/paint.html':
      sendFile( response, 'paint.html' )
      break
    case '/paint.js':
      sendFile( response, 'paint.js' )
      break
    case '/styles.css':
      sendFile( response, 'styles.css' )
      break
    case '/Images/blue_pen.jpg':
      sendFile( response, 'Images/blue_pen.jpg' )
      break
    case '/Images/Colors.png':
      sendFile( response, 'Images/Colors.png' )
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