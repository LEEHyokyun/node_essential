"use strict";

let string = "google.com";

let start = string.startsWith("g");
let includes = string.includes("google");
let end = string.endsWith("m");

const checkConatins = () => {
  if (start && includes && end) {
    return true;
  }
};

console.log(checkConatins());
