class Node{
    constructor(val = undefined){
        this.value = val
        this.next = null
    }
}

class LinkList{
    constructor(){
        this.head = new Node()
    }

    find(key){
        let p = this.head
        while(p !== null){
            if(p.value === key){
                return p
            }else{
                p = p.next
            }
        }
        return p
    }

    //向某元素后面插入新节点
    insert(nodeVal, val){
        let node = this.find(nodeVal)
        let newNode = new Node(val)
        newNode.next = node.next
        node.next = newNode
    }


    findPrevios(key){
        let p = this.head
        let q
        while(p !== null){
            if(p.value === key){
                return q
            }else{
                q = p
                p = p.next
            }
        }
        return null
    }

    remove(val){
        let node = this.find(val)
        let preNode = this.findPrevios(val)
        if(node === null){
            return null
        }else{
            preNode.next = node.next
            return node
        }
    }

    print(){
        let p = this.head.next
        let list = []
        while(p !== null){
            list.push(p.value)
            p = p.next
        }
        console.log(list.join(' > '))
    }
}


module.exports = LinkList


/* let linklist = new LinkList()
linklist.insert(undefined, 1)
linklist.insert(undefined, 2)
linklist.insert(2, 3)
linklist.print() */