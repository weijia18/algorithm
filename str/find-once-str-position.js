/**
 * 找到字符串中第一个只出现一次的字符的位置，没有返回-1
 */
function findIndex(str){
  let len = str.length
  let obj = {}
  for(let i = 0; i < len; i++){
    if(obj[str[i]]){
      obj[str[i]] += 1
    }else{
      obj[str[i]] = 1
    }
  }
  let minIndex = Infinity
  for(let key in obj){
    if(obj[key] !== 1){
      continue
    }else{
      let index = str.indexOf(key)
      if(index < minIndex){
        minIndex = index
      }
    }
  }
  if(minIndex === Infinity){
    return -1
  }else{
    return minIndex
  }
}