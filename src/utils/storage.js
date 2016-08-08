/**
 * Created by tww316 on 16/8/3.
 */
const storage = {
  prefix: 'airplake-',
  set: (key, val) => {
    key = storage.prefix + key;
    sessionStorage.setItem(key, JSON.stringify(val));
  },
  get: (key) => {
    key = storage.prefix + key;
    return sessionStorage.getItem(key);
  },
  clear: (key) => {
    key = storage.prefix + key;
    sessionStorage.removeItem(key);
  },
  clearAll: () => {
    sessionStorage.clear();
  }
}

export default storage;
