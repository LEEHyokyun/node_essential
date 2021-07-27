"use strict";

const https = require("https");
const options = {
  hostname: "google.com",
  port: 443,
  path: "/login",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode : ${res.statusCode}`);

  //응답이벤트(response)
  res.on("data", (d) => {
    process.stdout.write(d);
  });

  //요청이벤트(request)
  req.on("error", (err) => {
    console.error(err);
  });
});

req.end(0);
