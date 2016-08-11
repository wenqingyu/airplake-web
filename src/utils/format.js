/**
 * Created by tww316 on 16/8/6.
 */
const format = {
  normal(date) {
    if(!date) return;
    var y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate();

    m = m >= 10 ? m : '0' + m;
    d = d >= 10 ? d : '0' + d;

    return '' + y + '-' + m + '-' + d;
  }
}

export default format;
