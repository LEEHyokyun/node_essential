"use strict"(
  //정의된 직후 실행되는 함수

  function () {
    var language = "google.com";
  }
)();

//not defined
//console.log(language);

//defined

const result = (function () {
  var language = "google.com";
  return language;
})();

console.log(result);
