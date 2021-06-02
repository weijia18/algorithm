/**
 * 找出数组中出现频数超高数组长度一半的值
 * @param {} arr 
 */
function findHighFrequencyVal(arr){
  let obj = {}
  arr.forEach(item => {
    if(!obj[item]){
      obj[item] = 0
    }else{
      obj[item]++
    }
  });
  let len =arr.length
  for(let key in obj){
    if(obj[key] > Math.floor(len/2)){
      return key
    }
  }
  return
}