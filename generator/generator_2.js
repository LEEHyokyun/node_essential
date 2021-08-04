"use strict";

/*const obj = {
  *gen() {
    let cnt = 0;
    yield (cnt = cnt + 1);
    yield (cnt = cnt + 1);
    yield (cnt = cnt + 1);
  },
};
*/

function* gen() {
  let cnt = 0;
  while (true) {
    yield (cnt = cnt + 1);
  }
}

const g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
