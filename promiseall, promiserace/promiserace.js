"use strict";

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("1초뒤 호출"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("2초뒤 호출"), 2000);
});

Promise.race([promise1, promise2]).then((value) => console.log(value));
