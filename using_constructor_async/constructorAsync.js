//logic의 흐름을 이해하라

"use strict";

//class 내부 비동기 method들을 constructor에서 사용하기
//await / promise 이용
//static factory method pettern 이용

class DatabaseManager {
  constructor(settings) {
    this.settings = settings;
    this.init = init;
  }

  //RDBMS호출 및 data로의 접근
  query() {
    //Agonostic
  }

  //DB접속 및 table를 확보하기위한 초기화 과정
  async newMember() {
    await this.init;
  }

  //DB접속 및 table 삭제
  async deleteMember() {
    await this.init;
  }
}
