const settings = {};

class DatabaseManager {
  constructor() {}
  query() {}
  static async BUILD(config) {
    const CONFIG = await this.init(config); //DB초기화
    //초기화후 config 인자를 받아 온전한 DB 반환
    return new DatabaseManager(CONFIG);
    //singleton pattern .. parameter를 바꾼 동일한 객체를 반복적으로 반환할 때 static 활용
  }

  async init() {}

  newMember() {}
}

const manager = DatabaseManager.BUILD(settings);
