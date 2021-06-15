const { random } = require("../utils/random")

/**
 * 快排
 * @param {} arr 
 */
function quickSort(arr) {
  let len = arr.length
  let i = 0, j = len - 1
  let x = arr[i]
  //递归闭合条件
  if(len === 1){
    return arr[0]
  }
  while (i !== j) {
    //用>=和<=而不用>和<避免重复循环
    while (i !== j && arr[j] >= x) {
      j--
    }
    arr[i] = arr[j]
    while (i !== j && arr[i] <= x) {
      i++
    }
    arr[j] = arr[i]
  }
  arr[i] = x
  return arr.slice(0,1).concat(quickSort(arr.slice(1)))
}


var mrandom = require('../utils/random.js')

let list = []
for(let i = 1; i < 10; i++){
  list.push(mrandom(1,10))
}
console.log(list)
console.log(quickSort(list))

