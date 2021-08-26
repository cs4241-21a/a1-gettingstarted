const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request, response ) {
  sendFile( response, request.url )
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  filename = filename.substring(1)
  if (filename === ""){
    filename = "index.html"
  }
  
  fs.readFile( filename, function( err, content ) { 
    if ( err ) {
      response.end( '404 Error: File not found' )
    } else {
      response.end( content, 'utf-8' )
    }
  })
}
