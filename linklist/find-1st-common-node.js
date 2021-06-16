/**
 * 寻找两个链表的公共节点
 * @param {*} head1 
 * @param {*} head2 
 */
function findFirstCommonNode(head1,head2){
  let p1 = head1.next
  while(p1 !== null){
    let p2 = head2.next
    while(p2 !== null){
      if(p1 === p2){
        return p1
      }
      p2 = p2.next
    }
    p1 = p1.next
  }
  return null
}