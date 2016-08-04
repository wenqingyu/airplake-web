/**
 * Created by tww316 on 16/8/4.
 */
const request = (url, type) => {
  var promise = new Promise(function (resolve, reject) {

    var handler = () => {
      if (this.readyState != 4) {
        return;
      }
      if (this.status == 200) {
        if (this.response.status == 'OK') {
          resolve(this.response.data);
        }
        if (this.response.status == 'Error') {
          reject(new Error(this.response.error_msg));
        }
      } else {
        reject(new Error(this.statusText));
      }
    }

    var xhr = new XMLHttpRequest();
    xhr.open(type, url);
    xhr.onreadystatechange = handler;
    xhr.setRequestHeader('Content-Type', 'application-json');
    xhr.send();
  });

  return promise;
}

export default request;