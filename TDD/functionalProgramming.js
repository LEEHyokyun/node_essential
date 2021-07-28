//Javascript의 함수형 프로그래밍
//data의 단방향 흐름을 이해하기위한 설계방법론
//sugar syntax

"use strict";

const numbers = [10, 20, 30, 40];

//reduce sum
const sum = numbers.reduce((tot, val) => {
  tot = tot + val;
  return tot;
});

console.log(sum);

//reduce avg
const avg = numbers.reduce((tot, val, idx, arr) => {
  tot = tot + val;
  if (idx == arr.length - 1) {
    return tot / arr.length;
  } else {
    return tot;
  }
});

console.log(avg);
