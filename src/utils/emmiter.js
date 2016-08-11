/**
 * Created by tww316 on 16/8/12.
 */
const emitter = {
  _events: {},
  publish: function (event, data) {
    if (!this._events[event]) return;
    for (let i = 0, len = this._events[event].length; i < len; i++) {
      this._events[event][i].call(null, data);
    }
  },
  subscribe: function (event, cb) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(cb);
  }
}

export default emitter;
