/**
 * 寻找数组中等于指定值的两个数的index
 * @param {*} arr 
 * @param {*} s 
 */
function findTwoCountS(arr, s) {
  let len = arr.length
  let obj = {}
  let resultIndex = []
  for (let i = 0; i < len; i++) {
    obj[arr[i]] = i
    if (obj[s - arr[i]]) {
      resultIndex.push([i, obj[s - arr[i]]])
    }
  }
  return resultIndex
}


/**
 * findTwoCountS变体，有多组时要求找出乘积最小的一组
 * @param {*} arr 
 * @param {*} s 
 */
function findTwoCountS(arr, s) {
  let len = arr.length
  let obj = {}
  let resultVal = []
  for (let i = 0; i < len; i++) {
    obj[arr[i]] = i
    if (obj[s - arr[i]]) {
      resultVal.push([arr[i], s - arr[i]])
    }
  }
  let rLen = resultVal.length
  let minVal = Infinity
  let minIndex = null
  if(rLen){
    for(let j = 0; j < rLen; j++){
      if(minVal > resultVal[j][0] * resultVal[j][1]){
        minVal = resultVal[j][0] * resultVal[j][1]
        minIndex = j
      }
    }
  }
  return minIndex !== null ? resultVal[minIndex] : []
}