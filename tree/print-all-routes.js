/**
 * 打印树的所有路径（从根节点）
 * @param {*} tree 
 * @param {*} stack 
 * @param {*} result 
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
    没有parent属性
} */
function printAllRoutes(tree, stack = [], result = []){
  let p = tree
  stack.push(p.val)
  if(!p.left && !p.right){
    result.push(stack.slice(0))
  }
  if(p.left){
    printAllRoutes(p.left, stack, result)
  }
  if(p.right){
    printAllRoutes(p.right, stack, result)
  }
  stack.pop()
  return result
}