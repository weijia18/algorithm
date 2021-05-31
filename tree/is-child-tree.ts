import TreeNode from "./tree-node"
import BinaryTree from './binary-tree'


function isChildTree(treeP:TreeNode | null, treeC:TreeNode | null){
    let binaryTreeP = new BinaryTree()
    let binaryTreeC = new BinaryTree()
    binaryTreeP.preOrder(treeP)
    binaryTreeC.preOrder(treeC)

    binaryTreeP.inOrder(treeP)
    binaryTreeC.inOrder(treeC)

    if(binaryTreeP.preOrderList.join('').includes(binaryTreeC.preOrderList.join('')) 
        && binaryTreeP.inOrderList.join('').includes(binaryTreeC.inOrderList.join(''))){
        return true
    }
    return false
}
