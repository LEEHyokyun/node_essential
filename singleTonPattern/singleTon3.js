class Singleton {
  constructor() {
    this.message = "I am an instance";
  }
}

//OK
obj = new Singleton();
console.log(obj.message);

//No
//console.log(Singleton.message);
