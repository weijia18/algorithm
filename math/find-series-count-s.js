/**
 * 寻找等于给定值的连续正整数
 * @param {*} s 
 */
function findSeries(s){
  let result = []
  for(let n = 2; n < Math.ceil(s / 2); n++){
    let tmp = []
    if(n % 2 === 0){
      if((2*s) % n !== 0){
        continue
      }else{
        if(Math.floor(s / n) - n / 2 + 1 < 1){
          continue
        }
        for(let j = Math.floor(s / n) - n / 2 + 1; j <= Math.floor(s / n) + n / 2; j++){
          tmp.push(j)
        }
      }
    }else{
      if(s % n !== 0){
        continue
      }else{
        if(s/n - Math.floor(n / 2) < 1){
          continue
        }
        for(let j = s/n - Math.floor(n / 2); j <= s/n + Math.floor(n / 2); j++){
          tmp.push(j)
        }
      }
    }
    result.push(tmp)
  }
  return result
}

var mrandom = require('../utils/random.js')

for(let i = 1; i < 2; i++){
  let tmp = mrandom(1,100000)
  console.log(tmp)
  console.log(findSeries(tmp))
}