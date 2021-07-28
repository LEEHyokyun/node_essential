"use strict";

const arr = ["pdf", "html", "html", "gif", "gif"];

const res = arr.reduce((cnt, filetype) => {
  //undefined일 경우 0을 반환(첫번째 반복에서)
  //그 후 중복시 카운트 + 1
  cnt[filetype] = (cnt[filetype] || 0) + 1;
  return cnt;
}, {});

console.log(res);
