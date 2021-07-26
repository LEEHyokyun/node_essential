"use strict";

//생성자 this를 통한 접근
//혹은 내장된 메소드에 접근
class CacheManager {
  constructor() {
    this.config = [];
  }

  addconfig(obj = {}) {
    this.config.push(obj);
  }

  getconfig() {
    return this.config;
    tY;
  }
}

module.exports = CacheManager;
