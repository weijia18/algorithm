/**
 * 插入排序
 * @param {} arr 
 */
function insertionSort(arr){
  let len = arr.length
  for(let i = 1; i < len; i++){
    let tmp = arr[i]
    for(let j = i - 1; j >= 0; j --){
      if(tmp < arr[j]){
        arr[j + 1] = arr[j]
      }else{
        //当tmp比arr[j]大时应当立即终止内层循环，
        //避免tmp覆盖arr[j]前面的数
        arr[j + 1] = tmp
        break
      }
    }
    //console.log(arr)
  }
  return arr
}

console.log(insertionSort([1,2,6,5,4,3]))