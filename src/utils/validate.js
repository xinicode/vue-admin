

/**
 * 过滤字符串非法字符 只留下字母和数字
 */
export function stripScript(str) {
  var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）  &;—|{}【】‘；：”“'。，、？]")
  var rs = "";
  for (var i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, '');
  }
  return rs;
}


/**
 * 验证邮箱
 */
export function validateEmail(value) {
  let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  return reg.test(value) ? true : false;
}


/**
 * 验证密码6到20位数字加字母组合
 */
export function validatePass(value) {
  let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return reg.test(value) ? true : false;
}



/**
 * 验证数字
 */
 export function validateCode(value) {
  let reg = /^[0-9]{6}$/;
  return reg.test(value) ? true : false;
}
