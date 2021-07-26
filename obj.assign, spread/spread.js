"use strict";

const obj_1 = {
  title: "google.com",
};

const obj_2 = {
  name: "LeeHyoKyun",
};

//spread, obj.assign과 같은 기능이지만 가독성이 더 좋음
//spread 연산자, ...
const result = { ...obj_1, ...obj_2 };
console.log(result);

//배열에서의 활용
const array = [1, 2, 3, 4];
console.log(...array);
