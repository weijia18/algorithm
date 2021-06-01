
/**
 * 判断在给定栈的push序列下，出栈列表是否匹配
 * @param {*} pushV 
 * @param {*} popV 
 */
function isPopOrder(pushV, popV){
  let tmpArr = []
  pushV.forEach(item =>{
    tmpArr.push(item)
    while((tmpArr.length !==0) && (tmpArr.slice().pop() === popV.slice().shift())){
      console.log(tmpArr)
      tmpArr.pop()
      popV.shift()
    }
  })
  if(tmpArr.length === 0){
    return true
  }else{
    return false
  }
}

//console.log(isPopOrder([1,2,3,4,5],[4,3,5,2,1]))