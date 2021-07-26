"use strict";

const fs = require("fs");

//file 읽기, file을 받아와서 해당 파일 내용을 읽음
fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});

const content = "something to write";

fs.writeFile("test.txt", content, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("success");
});
