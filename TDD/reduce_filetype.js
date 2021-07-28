"use strict";

const arr = ["pdf", "html", "html", "gif", "gif"];

const res = arr.reduce((cnt, filetype) => {
  //undefined일 경우 0을 반환(첫번째 반복에서)
  //그 후 중복시 카운트 + 1
  //cnt[filetype]이 undefined일 경우 or 연산자에 의해 0이 반환되어, 0 +1
  //그 후 1부터 count
  cnt[filetype] = (cnt[filetype] || 0) + 1;
  return cnt;
}, {});

console.log(res);
