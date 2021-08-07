"use strict";
const events = require("events");
const eventsEmitter = new events.EventEmitter();
let eventName = "greeting";
class Publisher {
  constructor() {}

  publishMessage() {
    let message = "hello";
    eventsEmitter.emit(eventName, message);
  }
}
class Subscriber {
  constructor() {
    eventsEmitter.on(eventName, (greeting) => {
      console.log("Someone sent me a greeting: " + greeting);
    });
  }
}
// Lets create our publisher and subscriber
const publisher = new Publisher();
const subscriber = new Subscriber();
publisher.publishMessage();
