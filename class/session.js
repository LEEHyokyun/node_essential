"use strict";

//exports한 그대로 require
const CacheManager = require("./cache.js");

class SessionManager extends CacheManager {}

const sessionManager = new SessionManager();

sessionManager.addconfig({
  token: "google.com",
});

const config = sessionManager.getconfig();

console.log(config);
