"use strict";

//최소지연시간
setTimeout(() => {
  console.log("timeout)");
}, 1000);

//시간간격
setInterval(() => {
  console.log("Interval");
}, 1000);

//즉시
setImmediate(() => {
  console.log("immediate");
});
