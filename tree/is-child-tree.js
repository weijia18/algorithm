let BinaryTree = require('./binary-tree.js')


function isChildTree(treeP, treeC){
    let pPreOrderList = BinaryTree.preOrder(treeP)
    let cPreOrderList = BinaryTree.preOrder(treeC)

    let pInOrderList = BinaryTree.inOrder(treeP)
    let cInOrderList = BinaryTree.inOrder(treeC)

    if(pPreOrderList.join('').inculdes(cPreOrderList.join('')) 
        && pInOrderList.join('').inculdes(cInOrderList.join(''))){
        return true
    }
    return false
}

let root1 = {
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

let root2 = {
    val: 1,
    left:{
        val: 2,
        left:{
            val: 3,
            right:{
                val: 7
            },
        },
    },
    right:{
        val: 8
    }
}

console.log(isChildTree(root1,root2))