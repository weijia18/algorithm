/**
 * 排序数组，奇数位于数组的前半部分，偶数位于数组的后半部分
 * 元素的相对位置不变
 */
function sortArrByOdevity(arr){
    let oddArr, evenArr//奇数组，偶数组
    oddArr = arr.filter(item => item % 2)
    evenArr = arr.filter(item => !(item % 2))

    return oddArr.concat(evenArr)
}



//console.log(process.argv[2])
//console.log(sortArrByOdevity([1,2,3,4]))