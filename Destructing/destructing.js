"use strict";

const obj = {
  title: "this is title",
  value1: "this is value1",
  value2: "this is value2",
};

/*
const { title, item1, item2 } = obj;
console.log(title, item1, item2);
*/

//비구조화는 반드시 구조화된 객체의 선언자 및 변수명이 서로 일치해야한다.
const { title, value1, value2 } = obj;
console.log(title, value1, value2);

//배열 비구조화

const array = [0, 1, 2];

const [, a, b] = array;
console.log(a, b);
