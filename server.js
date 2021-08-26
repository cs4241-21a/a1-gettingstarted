const http = require('http')
const fs = require('fs')
const port = 3000

const routes = {
  '/': 'index.html'
}

http.createServer((req, res) => toRoute(res, routes[req.url] || req.url.slice(1))).listen(process.env.PORT || port)

function toRoute(res, route) {
  fs.readFile(route, function(err, data) {
    res.writeHead(err ? 404 : 200);
    res.end(err ? "File not found." : data);
  })
}
