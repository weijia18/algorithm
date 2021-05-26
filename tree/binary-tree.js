
function BinaryTree(root){
    this.root = root
}

BinaryTree.prototype.preOrderList = []
BinaryTree.prototype.inOrderList = []

BinaryTree.prototype.preOrder = function(root){
    if(root){
        BinaryTree.prototype.preOrderList.push(root.val)
        BinaryTree.prototype.preOrder(root.left)
        BinaryTree.prototype.preOrder(root.right)
    }
}

BinaryTree.prototype.inOrder = function(root){
    if(root){
        BinaryTree.prototype.inOrder(root.left)
        BinaryTree.prototype.inOrderList.push(root.val)
        BinaryTree.prototype.inOrder(root.right)
    }
}

let root = {
    val: 1,
    left:{
        val: 2,
        left:{
            val: 3,
            right:{
                val: 7
            },
        },
        right:{
            val: 4,
            left:{
                val: 5
            }
        }
    },
    right:{
        val: 8
    }
}

let binaryTree = new BinaryTree(root)
binaryTree.preOrder(binaryTree.root)
binaryTree.inOrder(binaryTree.root)
console.log(binaryTree)
console.log(binaryTree.preOrderList)
console.log(binaryTree.inOrderList)