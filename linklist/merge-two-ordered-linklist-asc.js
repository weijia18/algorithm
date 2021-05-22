/**
 * 合并两个单调递增的链表
 * 思路类似于归并排序
 */

 function mergeLinklistASC(head1, head2){
    let p1 = head1.next,
        p2 = head2.next,
        resHead,
        resPointer
    resPointer = resHead
    while (p1 != null && p2 != null) {
        if(p1.val > p2.val){
            resPointer.next = p2
            p2 = p2.next
        }else{
            resPointer.next = p1
            p1 = p1.next
        }
        resPointer = resPointer.next

    }
    if(p1 != null){
        while (p1 != null) {
            resPointer.next = p1
            p1 = p1.next
            resPointer = resPointer.next
        }
    }
    if(p2 != null){
        while (p2 != null) {
            resPointer.next = p2
            p2 = p2.next
            resPointer = resPointer.next
        }
    }
 }