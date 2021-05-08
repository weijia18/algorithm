
/* 
 * 参数为二维数组arr
 *（每一行从左到右递增，每一列从上到下递增）
 * 待查找的值val 
 * 
 */

function twodArraySearch(arr, val){
    let arrStr = arr.toString()
    arrStr.unshift(',')
    arrStr.push(',')
    return arrStr.includes(',' + val + ',')
}