"use strict";

const array = new Set();

array.add(1);
array.add(2);
array.add(2);
array.add(3);

for (const item of array) {
  console.log(item);
}
