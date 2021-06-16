/**
 * 冒泡排序
 * @param {} arr 
 */
function bubbleSort(arr){
  let len = arr.length
  for(let i = len - 1; i >= 0; i --){
    for(let j = 0; j < len - 1; j++){
      if(arr[j] > arr[j + 1]){
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }
  return arr
}

console.log(bubbleSort([1,2,5,4,3]))