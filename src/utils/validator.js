/**
 * Created by tww316 on 16/8/3.
 */
const validator = {
  checkUsername: (val) => {
    var reg = /^\w\w{5,19}$/;
    if(!reg.test(val)) return '用户名仅支持6-20个字母、数字和下划线的组合';
    return false;
  },
  checkEmail: (val) => {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    if(!reg.test(val)) return '邮箱格式不正确';
    return false;
  },
  checkMobile: (val) => {
    var reg = /^1[3|5|7|8][0-9]{9}$/;
    if(!reg.test(val)) return '手机号格式不正确';
    return false;
  },
  checkChinese: (val) => {
    var reg = /^[\u4e00-\u9fa5]+$/;
    if(!reg.test(val)) return '城市名必须为中文';
    return false;
  },
  checkIdCard: (val) => {
    var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    if(!reg.test(val)) return '身份证号格式不正确';
    return false;
  },
  checkWechat: (val) => {
    var reg = /^\w\w+$/;
    if(!reg.test(val)) return '微信号格式不正确';
    return false;
  }
}

export default validator;

// var stgs = {
//   isEmpty: (val, msg) => {
//     if (val === '') return msg;
//   },
//   minLength: (val, len, msg) => {
//     if (val.length > len) return msg;
//   },
//   isMobile: (val, msg) => {
//     var reg = /^1[3|5|7|8][0-9]{9}$/;
//     if (!reg.test(val)) return msg;
//   },
//   isEmail: (val ,msg) => {
//     var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
//     if (!reg.test(val)) return msg;
//   },
//   isChinese: (val, msg) => {
//     var reg = /^[\u4e00-\u9fa5]+$/;
//     if (!reg.test(val)) return msg;
//   },
//   username: (val, msg) => {
//     var reg = /^\w\w{5,19}$/;
//     if(!reg.test(val)) return msg;
//   }
// }

//var Validator = function() {
//  this.cache = [];
//}
//
//Validator.prototype.add = function(val, rules) {
//  var self = this;
//  for (let i = 0, rule; rule = rules[i++];) {
//    (function (rule) {
//      var stgArr = rule.stg.split(':');
//      var msg = rule.msg;
//      self.cache.push(() => {
//        var stg = stgArr.shift();
//        stgArr.unshift(val);
//        stgArr.push(msg);
//        return stgs[stg].apply(val, stgArr);
//      })
//    })(rule);
//  }
//}
//
//Validator.prototype.start = function() {
//  for (let i = 0, func; func = this.cache[i++];) {
//    let msg = func();
//    if (msg) return msg;
//  }
//}

//export default Validator;
