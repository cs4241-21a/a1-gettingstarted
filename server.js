const http = require("http"),
  fs = require("fs");

const port = 3000;

const server = http.createServer((request, response) => {
  sendFile(
    response,
    request.url === "/" ? "index.html" : request.url.substring(1)
  );
});

server.listen(process.env.PORT || port);

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    response.end(content, "utf-8");
  });
};
