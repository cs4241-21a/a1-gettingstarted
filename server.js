const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  if (request.url === '/') {
    sendFile( response, '/index.html')
  } else {
    sendFile(response, request.url)
  }
})

server.listen( port )

const sendFile = function( response, filename ) {
  filename = filename.substring(1)
   fs.readFile( filename, function( err, content ) {
     if (err) {
      console.log("404 Error: File Not Found")
      console.log(err)
     }
     else {
      response.end( content, 'utf-8' )
     }
   })
}
