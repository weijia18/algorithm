/**
 * 反转链表
 */

var Stack = require("../stack/index.js")

function reverseLinklist(head){
    let  p = head
    let  stack = new Stack([])
    while (p != null) {
        stack.push(p)
        p = p.next
    }
    let reverseHead
    let q = reverseHead
    while(!stack.isEmpty()){
        q.next = stack.pop()
        q = q.next
    }
    return reverseHead
}