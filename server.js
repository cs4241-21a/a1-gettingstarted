const http = require('http')
const fs = require('fs')
const port = 3000

const routes = {
  '/': 'index.html'
}

http.createServer((req, res) => toRoute(res, routes[req.url] || req.url.slice(1))).listen(process.env.PORT || port)

function toRoute(res, route) {
  fs.readFile(route, function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("File not found.");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  })
}
