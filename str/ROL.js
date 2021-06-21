/**
 * 字符串左循环
 * @param {*} str 
 * @param {*} K （小于字符串长度）
 */
function strROL(str, K){
  return str.substr(K - 1) + str.substr(0, K)
}