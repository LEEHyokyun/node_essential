"use strict";
/*
//when race condition occurs
async function main(){
    const transaction1, transaction2
    transaction1 = add()
    transaction2 = add()
}
*/

let total = 0;

async function main() {
  //const transaction1, transaction2
  const transaction1 = add();
  const transaction2 = add();

  await transaction1;
  await transaction2;
  console.log(await getTotal());
}

async function getTotal() {
  return total;
}

async function setTotal(value) {
  return value;
}

async function increment(value, incr) {
  return (value = value + incr);
}

async function add() {
  let current, newValue;
  current = await getTotal();
  newValue = await increment(current, 20);
  await setTotal(newValue);

  console.log(newValue);
}

/*
unlock, lock logic added
*/

class Lock {
  constructor() {
    this._locked = false; //lock여부 확인
    this._waiting = []; //waiting queue
  }

  //lock mechanism
  //lock, unlock

  lock() {
    const unlock = () => {
      let nextResolve;
      if (this._waiting.length > 0) {
        //대기열을 먼저 검사하고 대기열이 있으면 해당 대기열을 dequeue, 이를 unlock
        nextResolve = this._waiting.pop(0);
        nextResolve(unlock);
      } else {
        this._locked = false;
      }
    };

    if (this._locked) {
      //locked
      //this.locked = true 상태(=)
      return new Promise((resolve) => {
        //여기서 반환하는 객체는 nextResolve
        this._waiting.push(resolve);
      });
    } else {
      //unlocked
      this.locked = true;
      return new Promise((resolve) => {
        resolve(unlock);
      });
    }
  }
}

/*
after logic added,
use it
*/

const account = new Lock();

async function add() {
  let current, newValue;

  unlock = await account.lock(); //account는 Lock class에 대한 인스턴스임을 기억

  //transaction1, transcation2,.. 함수객체들을
  //lock() logic을 통해 현재 수행대상인 객체들에 대해 locked = true,
  //unlocked 애들은 대기큐에 넣거나 다음 대상으로 선별하여 unlocked 진행
  //대기줄 중 다음 처리대상인 애들은 dequeue하고 unlocked

  current = await getTotal();
  newValue = await increment(current, 20);
  await setTotal(newValue);

  await unlock();
}

//this logic does not occur any issues
