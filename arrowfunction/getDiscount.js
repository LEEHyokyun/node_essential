"use strict";

//변수를 rate를 먼저 받고
// price를 return,
// return한 price를 합성함수의 x로 다시 받아 최종적으로 rate * price 반환값 확보
const getDiscount = (rate) => (price) => rate * price;

const price = 10000;

const getTenpercentOff = getDiscount(0.1)(price);

console.log(getTenpercentOff);
