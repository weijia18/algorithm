import TreeNode from './tree-node'

class BinaryTree{
    root:TreeNode | null;
    preOrderList: Array<Number>;
    inOrderList: Array<Number>;
    postOrderList:Array<Number>;
    constructor(){
        this.root = null
        this.preOrderList = []
        this.inOrderList = []
        this.postOrderList = []
    }


    preOrder(root : TreeNode | null){
        if(root){
            this.preOrderList.push(root.val)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root : TreeNode | null){
        if(root){
            this.inOrder(root.left)
            this.inOrderList.push(root.val)
            this.inOrder(root.right)
        }
    }

    postOrder(root : TreeNode | null){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            this.postOrderList.push(root.val)
        }
    }
}

export default BinaryTree