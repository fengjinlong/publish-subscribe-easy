
function E():void {}
E.prototype = {
  // 收集
  on(name: string, callback: any, ctx = {}) {
    let events = this.events || (this.events = {});
    let obj = {
      fn: callback,
      ctx,
    };
    if (events[name]) {
      events[name].push(obj);
    } else {
      events[name] = [];
    }
    return this;
  },
  once(name: any, callback: any, ctx: any) {
    this.off(name, callback);
    this.on(name, callback, ctx);
  },
  emit(name: any) {
    //  参数
    let param = [].slice.call(arguments, 1);
    const eventArr = this.events[name] || [];
    for (let i = 0; i < eventArr.length; i++) {
      const ev = eventArr[i];
      ev.apply(ev.ctx, param);
    }
    return this;
  },
  off(name: any, callback: any) {
    const events = this.events || (this.events = {});
    let evts = events[name];
    if (evts) {
      let index = evts.findIndex(callback);
      if (index >= 0) {
        evts.splice(index, 1);
      }
    }
    return this;
  },
};
const emitter:any = new E()
export {}