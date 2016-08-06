/**
 * Created by tww316 on 16/8/3.
 */
const storage = {
  set: (key, val) => {
    sessionStorage.setItem(key, JSON.stringify(val));
  },
  get: (key) => {
    return sessionStorage.getItem(key);
  },
  clear: (key) => {
    sessionStorage.removeItem(key);
  },
  clearAll: () => {
    sessionStorage.clear();
  }
}

export default storage;
