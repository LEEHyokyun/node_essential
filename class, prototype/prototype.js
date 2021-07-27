"use strict";

//prototype을 이용한 함수선언

function Fullstack(backend, frontend) {
  this.backend = backend;
  this.frontend = frontend;

  Fullstack.prototype.getBackend = () => this.backend;
  Fullstack.prototype.setBacekend = () => (this.backend = backend);

  Fullstack.prototype.getfrontend = () => this.frontend;
  Fullstack.prototype.setfrontend = () => (this.backend = backend);
}
const fullstack = new Fullstack("java", "Script");

fullstack.getBackend;
fullstack.getfrontend;
