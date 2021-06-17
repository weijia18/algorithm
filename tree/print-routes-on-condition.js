/**
 * 打印给定树root和为给定值val的所有路径
 * @param {*} root 
 * @param {*} val 
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
    没有parent属性
} */
function printRoutes(root, expectNumber) {
    let nodeList = []
    function findNodes(root, val) {
        if (val - root.val === 0 && root.left === null && root.right === null) {
            nodeList.push(root)
        }
        if (root.left) {
            findNodes(root.left, val - root.val)
        }
        if (root.right) {
            findNodes(root.right, val - root.val)
        }
    }
    let inOrderList = []
    function inOrder(root) {
        if (root) {
            inOrder(root.left)
            inOrderList.push(root.val)
            inOrder(root.right)
        }
    }
    inOrder(root)
    findNodes(root, expectNumber)
    nodeList.forEach(p => {
        let index = inOrderList.indexOf(p)
        console.log(inOrderList.slice(0, index + 1).join('>'))
    })
}
