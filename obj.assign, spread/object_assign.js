"use strict";

const obj_1 = {
  title: "google.com",
};

const obj_2 = {
  name: "LeeHyoKyun",
};

//object.assign, 공객체에 obj_1, obj_2 할당
const result = Object.assign({}, obj_1, obj_2);
console.log(result);
