/**
 * 第n个丑数
 */

function getUglyNumber(n){
  let res = []
  res[0] = 1
  let pos2 = 0
  let pos3 = 0
  let pos5 = 0
  for(let i = 1; i < n; i++){
    let k = Math.min(res[pos2]*2, res[pos3]*3, res[pos5]*5)
    res[i] = k
    if(k === res[pos2]*2){
      pos2++
    }
    if(k === res[pos3]*3){
      pos3++
    }
    if(k === res[pos5]*5){
      pos5++
    }
  }
  return res[n - 1]
}

for(let i = 1; i < 1000; i++){
  console.log(i, getUglyNumber(i))
}