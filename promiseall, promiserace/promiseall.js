"use strict";

//promiseall
//내부 promise들이 모두 완료될때까지 대기

const promise1 = new Promise((resolve, reject) => resolve("즉시 호출"));
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3초뒤 호출");
  }, 3000);
});

Promise.all([promise1, promise2]).then((values) => console.log(values));
