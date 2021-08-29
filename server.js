const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  sendFile(response, request.url)
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  if (filename==="/") filename="/index.html"
   fs.readFile( filename.substring(1), function( err, content ) {
     if (err) {
       response.end("File not found.")
     }
     else {
      response.end( content, 'utf-8' )
     }
   })
}
