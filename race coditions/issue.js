//race condition이 발생하는 상황

"use strict"[
  //정적변수일 경우 No issues
  (0, 1, 2, 3)
]
  .map((item) => {
    console.log(item);
  })

  [
    //비동기처리일 경우 issues
    (Promise1, Promise2, Promise3)
  ].map((item) => {
    console.log(item);
  });

//순환시 순환 순서를 명시적으로 정해주는 경우
const arr = [Promise1, Promise2];

for (const item of arr) {
  //logic for item by async
}
