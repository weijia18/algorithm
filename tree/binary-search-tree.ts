import TreeNode from './tree-node'

class BinarySearchTree{
    root:TreeNode | null;
    constructor(root: TreeNode | null){
        this.root = root
    }

    insert(node : TreeNode){
        let p = this.root
        while(p !== null){
            if(node.val > p.val){
                p = p.right
            }else{
                p = p.left
            }
        }
        p = node
    }

    preOrder(root : TreeNode | null){
        if(root){
            this.preOrder(root.left)
            console.log(root.val + '>')
            this.preOrder(root.right)
        }
    }

    inOrder(root : TreeNode | null){
        if(root){
            this.inOrder(root.left)
            console.log(root.val + '>')
            this.inOrder(root.right)
        }
    }
}

let root = new TreeNode(6)
let binarySearchTree = new BinarySearchTree(root)
binarySearchTree.insert(new TreeNode(4))
binarySearchTree.insert(new TreeNode(7))
binarySearchTree.insert(new TreeNode(1))
binarySearchTree.insert(new TreeNode(2))
binarySearchTree.insert(new TreeNode(3))
binarySearchTree.insert(new TreeNode(8))

binarySearchTree.inOrder(root)
