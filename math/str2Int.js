/**
 * 字符串转整数
 * @param {} str 
 */
function str2Int(str){
  let pattern = /^[\+\-]?[0-9]+$/g
  if(!pattern.test(str)){
    return 0
  }
  let len = str.length
  let sum = 0
  for(let i = len - 1; i > 0; i--){
    sum += str[i] * Math.pow(10, len - 1 - i)
  }
  if(str[0] === '+'){
    return sum
  }
  if(str[0] === '-'){
    return -sum
  }
  return sum + str[0] * Math.pow(10, len - 1)
}
console.log(str2Int('2223231'))
console.log(str2Int('+2223231'))
console.log(str2Int('-2223231'))
console.log(str2Int('2223-231'))