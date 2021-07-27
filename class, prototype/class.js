"use strict";

//prototype을 class화

class Fullstack {
  constructor(backend, frontend) {
    this.backend = this.backend;
    this.frontend = this.frontend;
  }

  getBackend() {
    return this.backend;
  }

  setBackend(backend) {
    this.backend = this.backend;
  }

  getFronted() {
    return this.frontend;
  }

  setFronted() {
    this.frontend = this.frontend;
  }
}

const fullstack = new Fullstack("java", "script");

console.log(fullstack.getBackend());
console.log(fullstack.getFronted());
