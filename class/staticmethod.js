"use strict";

class test {
  constructor() {
    this.config = {};
  }

  fn() {}

  static call() {
    console.log("hello, this is static called");
  }
}

//test class에 대한 생성없이 바로 static 함수호출이 가능
test.call();
