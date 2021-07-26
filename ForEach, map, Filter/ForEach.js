"use strict";

const array = [1, 2, 3];

array.forEach((item) => console.log(item));

const newArray = [];

//forEach는 조회/탐색위주
array.forEach((item) => {
  newArray.push(item);
});

console.log(newArray);
