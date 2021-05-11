var Stack = require("./index.js")

function Queue(){
    this.stack = new Stack([])
    this.subStack = new Stack([])
}

Queue.prototype.pop = ()=>{
    return this.stack.pop()
}

Queue.prototype.push = (item) =>{
    while (!this.stack.isEmpty()){
        this.subStack.push(this.stack.pop())
    }
    this.subStack.push(item)
    this.stack.push(this.subStack.pop())
}
