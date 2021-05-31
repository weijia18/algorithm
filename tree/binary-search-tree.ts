import TreeNode from './tree-node'

class BinarySearchTree{
    root:TreeNode | null;
    constructor(){
        this.root = null
    }

    insert(val : Number){
        let node:TreeNode | null = new TreeNode(val)
        if(!this.root){
            this.root = node
            return true
        }
        let p:TreeNode | null = this.root
        let q:TreeNode | null = null
        /**
         * 下面这种方法p是p（上一个p）.left的深拷贝，改变p不会改变p（上一个p）.left
         */
        /* while(p !== null){
            if(node.val > p.val){
                p = p.right
                console.log(p)
            }else{
                p = p.left
            }
        }
        p = node */
        while(p !== null){
            q = p
            if(node.val > p.val){
                p = p.right
            }else{
                p = p.left
            }
        }
        if(q){
            if(node.val > q.val){
                q.right = node
            }else{
                q.left = node
            }
        }
        return true
    }

    preOrder(root : TreeNode | null){
        if(root){
            console.log(root.val + '>')
            this.preOrder(root.left)
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

    postOrder(root : TreeNode | null){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.val + '>')
        }
    }

    search(val:Number){
        if(!this.root){
            return false
        }
        let p:TreeNode | null = this.root
        while(p){
            if(p.val === val){
                return true
            }
            if(p.val > val){
                p = p.left
            }else{
                p = p.right
            }
        }
        return false
    }

    /* //删除节点的right替换删除的节点，left节点树接到right节点树的最左边节点的left上面
    delete(val:Number){
        if(!this.root){
            return null
        }
        let p:TreeNode | null = this.root
        let q:TreeNode | null = null
        while(p){
            q = p
            if(p.val === val){
                
            }
            if(p.val > val){
                p = p.left
            }else{
                p = p.right
            }
        }
    } */
}

let binarySearchTree = new BinarySearchTree()
binarySearchTree.insert(6)
binarySearchTree.insert(4)
binarySearchTree.insert(7)
binarySearchTree.insert(1)
binarySearchTree.insert(2)
binarySearchTree.insert(3)
binarySearchTree.insert(8)

binarySearchTree.inOrder(binarySearchTree.root)
console.log(binarySearchTree.search(9))
