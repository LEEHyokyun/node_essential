"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("context-Type", "text/html");
  res.end("<div>Hello World</div>");
});

//const port = process.env
const port = 200;

server.listen(port);

console.log(`server running at port at ${port}`);
