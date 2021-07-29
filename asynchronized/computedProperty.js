"use strict";

class Sample {
  //Computed Property를 통해
  //생성자에 접근해도, 호출된 시점에서 생성자를 정의하여 비동기적으로 사용 가능
  *[Symbol.iterator]() {
    let cnt = 0;
    cnt = cnt + 1;
    yield cnt;
  }
}

const fn = new Sample();
const gn = fn[Symbol.iterator]();

console.log();

console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
