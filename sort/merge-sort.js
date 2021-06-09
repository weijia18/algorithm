/**
 * 归并排序
 * @param {*} arr
 * 
 */
function merge(arr1, arr2){
  let len1 = arr1.length
  let len2 = arr2.length
  let i = 0, j = 0
  let tmp = []
  while(i < len1 && j < len2){
    if(arr1[i] > arr2[j]){
      tmp.push(arr2[j++])
    }else{
      tmp.push(arr1[i++])
    }
  }
  while(i < len1){
    tmp.push(arr1[i++])
  }
  while(j < len2){
    tmp.push(arr2[j++])
  }
  return tmp
}

function mergeSort(arr){
  let len = arr.length
  let mid = Math.floor(len/2)
  if(mid === 0){
    return arr
  }
  return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid,len)))
}

//console.log(merge([2,3,4],[1,5,6,7,8]))
console.log(mergeSort([1,4,5,2,6,3]))
