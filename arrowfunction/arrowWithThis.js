"use strict";

//before refactoring
API.prototype.get = function (resource) {
  var self = this;
  return new Promise(function (resolve, reject) {
    http.get(self.uri + resource, function (data) {
      resolve(data);
    });
  });
};

//after refactoring
//생성자 this 삭제
API.prototype.get = (resource) => {
    new Promise (resolve, reject) => {
        http.get(this.uri + resource, (data) => {
            resolve(data);
        })
    }
}