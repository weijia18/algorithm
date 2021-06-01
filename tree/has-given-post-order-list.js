/**
 * 判断给定后序遍历列表是否属于某个二叉查找树
 * @param {*} arr 
 */
function hasGivenPostOrderListOuter(arr){
  let flag = true
  function hasGivenPostOrderList(arr){
    let len = arr.length
    if(len === 1 || len === 0){
      flag = flag && true
    }else{
      let rootVal = arr[len - 1]
      let boundaryIndex
      for(let i = 0; i < len - 2; i++){
        if(arr[i] > rootVal){
          boundaryIndex = i
          break
        }
      }
      for(let j = boundaryIndex; j < len - 2; j++){
        if(arr[j] < rootVal){
          return false
        }else{
          hasGivenPostOrderList(arr.slice(0, boundaryIndex))
          hasGivenPostOrderList(arr.slice(boundaryIndex, len - 2))
        }
      }
    }
  }
  hasGivenPostOrderList(arr)
  if(flag){
    return true
  }
}

console.log(hasGivenPostOrderListOuter([4,8,6,12,16,14,10]))