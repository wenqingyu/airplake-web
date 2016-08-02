/**
 * Created by tww316 on 16/8/3.
 */
const storage = {
  prefix: 'airplake-',
  set: (key, val) => {
    key = this.prefix + key;
    var str = JSON.stringify(val);
    sessionStorage.setItem(key, str);
  },
  get: (key) => {
    key = this.prefix + key;
    var str = sessionStorage.getItem(key);
    return str ? JSON.parse(str) : null;
  },
  clear: (key) => {
    key = this.prefix + key;
    sessionStorage.removeItem(key);
  },
  clearAll: () => {
    sessionStorage.clear();
  }
}

export default storage;
