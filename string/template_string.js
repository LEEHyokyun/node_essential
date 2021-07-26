"use strict";

const details = "nate.com";

let str = "google.com";
//template string을 사용하기위해선 백틱을 사용한다!
str = str + `added with ${details}`;

console.log(str);
