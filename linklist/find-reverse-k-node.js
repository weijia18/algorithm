/**
 * function listNode(val){
 *      this.val = val
 *      this.next = null
 * }
 * 
 * 查询链表的倒数第k个节点
 */

 function findRKNode(head,k){
     let p, q
     p = head
     q = head
     let i = 0 
     while (p != null) {
         if(i < k){
             p = p.next
         }else{
             p = p.next
             q = q.next
         }
         i++
     }
     if(k - i > 0){
         return null
     }
     return q.val
 }