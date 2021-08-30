console.log("Server starting up")
const http = require('http'),
      fs   = require('fs'),
      port = 3000
console.log("Imported packages")
const server = http.createServer( function( request,response ) {
  console.log("New request for " + request.url)
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile(response, 'style.css')
      break
    case '/classnotes/':
      sendFile(response, 'classnotes/index.html')
      break
    case '/classnotes/8-26-21':
      sendFile(response, 'classnotes/8-26-21.html')
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
