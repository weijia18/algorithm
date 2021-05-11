function Stack(arr){
    this.arr = arr ? arr : []
}

Stack.prototype.push = (item) =>{
    this.arr.push(item)
}

Stack.prototype.pop = () =>{
    this.arr.pop()
}

Stack.prototype.peek = () =>{
    return this.arr.length ? this.arr[this.arr.length - 1] : null 
}

Stack.prototype.isEmpty = () =>{
    return !!this.arr.length
}

Stack.prototype.size = () =>{
    return this.arr.length
}

module.exports = Stack