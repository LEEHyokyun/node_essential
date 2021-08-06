class PrivateSingleton {
  constructor() {
    this.message = "I am an instance";
  }
}

class Singleton {
  constructor() {
    throw new Error("Use Singleton.getInstance()");
  }
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new PrivateSingleton();
    }
    return Singleton.instance;
  }
}

const object = Singleton.getInstance();
console.log(object.message); // Prints out: 'I am an instance'

object.message = "Foo Bar"; // Overwrite message property
const instance = Singleton.getInstance();
console.log(instance.message); // Prints out: 'Foo Bar'
