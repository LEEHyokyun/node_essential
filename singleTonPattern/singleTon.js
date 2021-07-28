"use strict";

class CacheManager {
  constructor() {
    if (!CacheManager.instance) {
      this._code = [];
      CacheManager.instance = this;
    }

    return CacheManager.instance;
  }
}

const instance = new CacheManager();

//singletonPattern은 class 생성자가 최초 실행 간 1번만 초기화되도록 설정
//object freeze
Object.freeze(instance);
