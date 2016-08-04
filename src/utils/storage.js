/**
 * Created by tww316 on 16/8/3.
 */
const storage = {
  set: (key, val) => {
    var str = JSON.stringify(val);
    sessionStorage.setItem(key, str);
  },
  get: (key) => {
    var str = sessionStorage.getItem(key);
    return str ? JSON.parse(str) : null;
  },
  clear: (key) => {
    sessionStorage.removeItem(key);
  },
  clearAll: () => {
    sessionStorage.clear();
  }
}

export default storage;
