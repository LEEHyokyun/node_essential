"use strict";

function edit() {}
function write() {}

//함수 export
module.exports = {
  edit,
  write,
};

//다양한 type data export
//inline function 선언 및 export
module.exports = {
  id: "",
  token: "",
  fn: () => {
    console.log("this is a function");
  },
};
