function isMatchExp(str, exp){
  let stack = []
  let len = str.length
  for(let i = len - 1; i >= 0; i--){
    stack.push(str[i])
  }
  let expLen = exp.length
  for(var j = 0; j < expLen; j++){
    if(exp[j] === '.'){
      stack.pop()
    }else if(exp[j] === '*'){
      if(j === 0){
        return false
      }else{
        //a*a这种情况，交换*和a的位置后，弹出stack的顶部元素，进入a*b情况
        //a*b这种情况，stack栈顶往下数有多少a弹出多少
        if(exp[j + 1] === exp[j - 1]){
          let swap = exp[j + 1]
          exp[j + 1] = '*'
          exp[j] = swap
          stack.pop()
        }else{
          let tmp = stack.pop()
          while(tmp === exp[j - 1]){
            tmp = stack.pop()
          }
          //不满足的元素返回栈顶
          stack.push(tmp)
        }
      }
    }else{
      if(stack.pop() !== exp[j]){
        return false
      }
    }
  }
  if(stack.length === 0 && j === expLen){
    return true
  }
}

console.log(isMatchExp('aaa', 'a*a'))