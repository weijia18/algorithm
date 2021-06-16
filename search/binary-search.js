/**
 * 二分查找迭代方式（支持查找多个相同的值）
 * @param {} sortArr 
 * @param {*} val 
 */
function binarySearch(sortArr, val){
  let len = sortArr.length
  let right = len - 1
  let left = 0
  let mid = Math.floor((right + left)/2)
  let resultIndex = []
  while(left !== right){
    if(val > sortArr[mid]){
      left = mid + 1
      mid = Math.floor((right + left)/2)
    }else if(val < sortArr[mid]){
      right = mid - 1
      mid = Math.floor((right + left)/2)
    }else{
      let tmp = mid
      while(mid >= 0 && mid <= len -1 && sortArr[mid] === val ){
        resultIndex.push(mid)
        mid++
      }
      mid = tmp - 1
      while(mid >= 0 && mid <= len -1 && sortArr[mid] === val ){
        resultIndex.push(mid)
        mid--
      }
      break
    }
  }
  return resultIndex
}

/* var mrandom = require('../utils/random.js')
var quickSort = require('../sort/quick-sort')

let list = []
for(let i = 1; i < 100; i++){
  list.push(mrandom(1,100))
}
let sortList = quickSort(list)
let val = mrandom(1,200)
console.log("sortList",sortList)
console.log("val",val)
console.log(binarySearch(sortList, val)) */
