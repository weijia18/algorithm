/**
 * 对应一个n米的绳子，切成m段，使得每段的乘积最大
 * @param {*} n （绳子的长度）
 * @param {*} cache （优化递归的cache）
 * 
 * @return 乘积最大值
 */
function maxCut(n, cache = {}){
  let maxRes = -Infinity
  if(n === 1){
    return 1
  }
  for(let i = n - 1; i >= Math.floor(n / 2); i--){
    let tmp = Math.max((cache[i] || maxCut(i, cache)) * (cache[n - i] || maxCut((n - i), cache[i])), n)
    /* cache[i] = maxCut(i)
    cache[n - i] = maxCut(n - i)  */
    if( tmp > maxRes){
      maxRes = tmp
    }
  }
  cache[n] = maxRes
  return maxRes
}


console.log(maxCut(1348))