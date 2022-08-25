// function E():void {}
class E {
  events: any = {};
  // 收集
  on(name: string, callback: any) {
    // let events = this.events || (this.events = {});
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(callback);
    return this;
  }
  once(name: any, callback: any) {
    this.off(name, callback);
    this.on(name, callback);
  }
  emit(name: any) {
    //  参数
    let param = [].slice.call(arguments, 1);

    const eventArr = this.events[name] || [];
    for (let i = 0; i < eventArr.length; i++) {
      const ev = eventArr[i];
      ev.apply(null, param);
    }
    return this;
  }
  off(name: any, callback: any) {
    const events = this.events || (this.events = {});
    let evts = events[name];
    if (evts.length) {
      evts.splice(0, 1);
    }
    return this;
  }
}
const emitter: any = new E();
export { emitter };
