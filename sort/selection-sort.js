/**
 * 选择排序
 * @param {} arr 
 */
function selectionSort(arr){
  let len = arr.length
  for(let i = 0; i < len - 1; i++){
    let min = Infinity
    let minIndex
    for(let j = i; j < len; j++){
      if(arr[j] < min){
        min = arr[j]
        minIndex = j
      }
    }
    arr[minIndex] = arr[i]
    arr[i] = min
  }
  return arr
}

console.log(selectionSort([1,2,6,5,4,3]))