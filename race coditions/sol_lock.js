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
        this._locked = true;
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
