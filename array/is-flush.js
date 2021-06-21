/**
 * 判断数组能否构成顺子（0可以代表任何数）
 * 思路：先排序数组，然后计算非零值之间的差之和，小于数组长度则可以构成顺子，
 * 反之不能
 * @param {} arr 
 */
function isFlush(arr) {
  arr.sort((a, b) => {
    return a > b
  })
  let len = arr.length
  let noZeroIndex = arr.findIndex(item => item !== 0)
  let count = 0
  for (let i = noZeroIndex; i < len - 1; i++) {
    count += arr[i + 1] - arr[i]
  }
  if(count < len ){
    return true
  }
  return false
}