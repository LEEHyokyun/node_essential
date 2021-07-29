//class 내부의 constructor(생성자)는 비동기함수호출/callback/async사용 모두 불가
//기본적으로 생성자는 최초 1번만 호출되어 비동기함수호출이 불가.

"use strict";

class Sample {
  *gen() {
    let cnt = 0;
    //++cnt 해당 라인 실행전에 cnt = cnt + 1
    //cnt++ 해당 라인 실행후에 cnt = cnt + 1
    cnt = cnt + 1;
    yield cnt;
  }
}

//generate에 접근할 수 있도록 생성자를 통해 접근필요
//console.log(generate.next());

//아래 결과를 보면 생성자는 최초 1번만 호출되어 비동기적으로 사용할 수 없음을 알 수 있음.

const fn = new Sample();
const gn = fn.gen();

console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
