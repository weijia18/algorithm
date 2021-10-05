// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
// 输入：
// {8,6,10,5,7,9,11}
// 返回值：
// [[8],[6,10],[5,7,9,11]]



function Print(pRoot)
{
    // write code here
    let queue = []
    let row = 0
    let col = 0
    let res = []
    pRoot.row = 0
    queue.push(pRoot)
    let p = queue.shift()
    while(queue.length !== 0){
        let p = queue.shift()
        
        if(!res[p.row]){
           res[p.row] = new Array()
        }
        res[p.row].push(p.val)
        if(p.left !== null){
            p.left.row = p.row + 1
            queue.push(p.left)
        }
        if(p.right !== null){
            p.right.row = p.row + 1
            queue.push(p.right)
        }
    }
    return res
}

//别人写的，用递归，把层深度传入进去
function Print2(pRoot)
{
    // write code here
 const res = []
 const traversal = (root,depth) => {
     if(root !== null){
         if(!res[depth]){
             res[depth] = []
         }
         traversal(root.left,depth+1)
         res[depth].push(root.val)
          traversal(root.right,depth+1)
     }
 }
 traversal(pRoot,0)
 return res
}