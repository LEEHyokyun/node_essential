"use strict";
const numbers = [0, -1, 2, -3, 4, -5, 6, -7];

const res = numbers.reduce((tot, amt) => {
  if (amt > 0) {
    tot.push(amt);
  } else {
  }
  return tot;
}, []);

console.log(res);
