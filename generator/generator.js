//"use strict";

//비동기 프로그래밍의 기초
//async-await, Redux
//yield!

//generator 사용시, async도 마찬가지고
//arrow 사용불가

//data를 반환하되, 일반 함수처럼 반환하고 종료하는 것이 아닌
//값을 반환해도 함수는 계속 실행
//조건이 실행될때마다 변해서 반환값이 달라지는 경우..
function* log() {
  console.log(0, yield);
  console.log(1, yield);
  console.log(2, yield);
}

const gen = log();

gen.next("zero"); //next함수 사용시 yield와 함께 반응, 함수를 종료하지 않고 계속 실행
gen.next("first"); //함수가 종료되지 않았으므로 다음 라인을 실행한다
gen.next("second");
