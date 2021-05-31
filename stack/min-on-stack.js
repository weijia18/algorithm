/**
 * 设计一个stack类，实现O(1)复杂度的min函数
 * 思路：空间换时间，增加一个辅助栈
 */
class O1minStack{
  constructor(){
    this.arr = []
    this.subArr = []
  }
  push(val){
    this.arr.push(val)
    if(this.isEmpty()){
      this.subArr.push(val)
    }else{
      if(val > this.subArr[this.subArr.length - 1]){
        this.subArr.push(this.subArr[this.subArr.length - 1])
      }else{
        this.subArr.push(val)
      }
    }
  }
  top(){
    return !this.isEmpty() ? this.arr[this.arr.length - 1] : null
  }
  isEmpty(){
    return !this.arr.length
  }
  min(){
    return this.subArr.length ? this.subArr[this.arr.length - 1] : null
  }
}

/* let stack = new O1minStack()
stack.push(3)
stack.push(4)
stack.push(2)
stack.push(1)
stack.push(5)
console.log(stack.min()) */