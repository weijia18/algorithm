/**
 * 将整数数组里面的所有数拼接为最小整数
 * 
 * 思路:先对数组类似冒泡排序，再拼接数组
 */

function findMinNumberOnArray(arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = len - 1; j > i; j--) {
      let strX = String(arr[j])
      let strY = String(arr[j - 1])
      if((strX + strY) < (strY + strX)){
        let tmp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tmp
      }
    }
  }
  return parseInt(arr.join(''))
}

var mrandom = require('../utils/random.js')

let list = []
for(let i = 1; i < 10; i++){
  list.push(mrandom(1,100))
}
console.log(list)
console.log(findMinNumberOnArray(list))
