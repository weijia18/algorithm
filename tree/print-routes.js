/**
 * 打印给定树root和为给定值val的所有路径
 * @param {*} root 
 * @param {*} val 
 */
function printRoutes(root, val){
  let nodeList = []
  function findNodes(root, val){
    if(val - root.val === 0 && root.left === null && root.right === null){
      nodeList.push(root)
    }
    findNodes(root.left, val - root.val)
    findNodes(root.right, val - root.val)
  }

  findNodes(root, val)
  nodeList.forEach(p =>{
    let q = p
    let tmp = []
    while(q != null){
      tmp.unshift(q.val)
    }
    console.log(tmp.join('>'))
  })
}
