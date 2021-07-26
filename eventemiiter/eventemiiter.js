"use strict";

//class module import
const EventEmitter = require("events");

//class 확장
class ChatManager extends EventEmitter {}

//class 선언
const chatManager = new ChatManager();

//on함수 .. 특정이벤트 발생시(join), 함수실행
chatManager.on("join", () => {
  console.log("new user joined");
});

//특정이벤트를 강제로 발생한다(=emit, 이벤트 방출)
//hello 이벤트에 대해선 반응안함
chatManager.emit("join");
chatManager.emit("hello");
