function findSeries(s){
  let result = []
  for(let n = 1; n < Math.ceil(s / 2); n++){
    let tmp = []
    if(n % 2 === 0){
      if((2*s) % n !== 0){
        continue
      }else{
        for(let j = Math.floor(s / n) - n / 2 + 1; j <= Math.floor(s / n) + n / 2; j++){
          tmp.push(j)
        }
      }
    }else{
      if(s % n !== 0){
        continue
      }else{
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
  console.log(findSeries(mrandom(1,1000)))
}