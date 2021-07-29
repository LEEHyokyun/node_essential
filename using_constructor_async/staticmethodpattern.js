"use strict";

//static처리, new로 class 선언없이 내장 함수 사용가능
//마찬가지로 원리로 constructor단에서 static method 초기화를 통해 함수활용

class DatabaseManager {
  constructor(settings) {}

  static async BUILD(settings) {
    //this = type of DatabaseManager
    const config = await this.init(settings);
    return new DatabaseManager(config);
  }

  query() {
    //agnostic
  }

  manager = DatabaseManager.BUILD(settings);
}
