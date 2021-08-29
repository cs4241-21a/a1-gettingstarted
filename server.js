const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  if(request.method === "POST")
  {
    switch(request.url) {
      case '/send_message':
        let body = "";
        request.on("data", (chunk) => {
          body += chunk;
        });

        request.on("end", () => {
          handleSendMessage(request, response, JSON.parse(body));
        });

        break;
      
        default:
          console.log("Bad route: " + request.url);
          response.end(400);
          break;
    }
  }
  else
  {
    console.log(request.url);
    switch( request.url ) {
      case '/':
        sendFile( response, 'index.html' )
        break;

      case '/index.html':
        sendFile( response, 'index.html' )
        break;

      case '/client.js':
        sendFile(response, 'client.js');
        break;

      case '/get_messages':
        handleGetMessages(request, response);
        break;

      default:
        console.log("Failed to find file: " + request.url);
        response.end( '404 Error: File Not Found' );
    }
  }
});

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  fs.readFile( filename, function( err, content ) {
    response.end( content, 'utf-8' );
  });
}

const handleGetMessages = function(req, res)
{
  console.log("Getting messages");

  let empty_messages = {
    "messages": []
  };

  fs.readFile("messages.json", "utf8", (err, data) => {
    if(err)
    {
      console.log(err);

      res.end(JSON.stringify(empty_messages));
      return;
    }
    
    console.log("messages.json:");
    console.log(data);

    res.end(data);    
  });
}

const handleSendMessage = function(req, res, body)
{
  let msg = null;

  console.log("Message received");
  console.log(body);

  fs.readFile("messages.json", "utf8", (err, data) => {
    if(err)
    {
      console.log(err);
      res.end("Failed");
      return;
    }

    messages = JSON.parse(data).messages;  
    console.log(messages);  

    messages.push({
      "name": body.name,
      "msg": body.msg,
      "date": body.date
    });

    console.log(messages);

    msg = {
      "messages": messages
    };

    res.end("Success");

    fs.writeFile("messages.json", JSON.stringify(msg), (err) =>
    {
      if (err) throw err;

      console.log("Wrote new messages.json");
      console.log(JSON.stringify(msg));
    });
  });
}