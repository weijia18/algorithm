/**
 * n个人0-m-1报数，去掉报m-1的人，循环报数，求最后留下来的人
 * @param {} n (n个人)
 * @param {*} m （0-m-1报数）
 */
function whoIsLuckyOne(n,m){
  let arr = []
  for(let i = 0; i < n; i++){
    arr.push(i)
  }
  let countIndex = -1
  while(arr.length > 1){
    countIndex += m
    while(countIndex > arr.length - 1){
      countIndex = countIndex - arr.length 
    }
    console.log(arr)
    //arr.splice(-1, 1)删除的是arr的最后一个元素
    arr.splice(countIndex, 1)
    countIndex = countIndex - 1
  }
  return arr[0]
}

console.log(whoIsLuckyOne(5,3))