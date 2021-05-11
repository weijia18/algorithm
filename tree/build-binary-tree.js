function TreeNode(val){
    this.val = val
    this.left = this.right = null
}

/**
 * 先序遍历和中序遍历列表重构二叉树
 * @param {*} preOrderArr 
 * @param {*} inOrderArr 
 */
function buildTree(preOrderArr,inOrderArr){
    let root
    if(preOrderArr.length === 0 || inOrderArr.length ===0){
        return null
    }else{
        root = new TreeNode(preOrderArr[0])
        let rootIndex = inOrderArr.indexOf(preOrderArr[0])
        let leftInOrderArr = inOrderArr.slice(0, rootIndex)
        let rightInOrderArr = inOrderArr.slice(rootIndex)
        let leftPreOrderArr = preOrderArr.slice(1, 1 + rootIndex)
        let rightPreOrderArr = preOrderArr.slice(1 + rootIndex)
        travel(root, leftPreOrderArr, rightPreOrderArr, leftInOrderArr, rightInOrderArr)
    }
    return root
}

function travel(tree, leftPreOrderArr, rightPreOrderArr, leftInOrderArr, rightInOrderArr){
    if(leftPreOrderArr.length === 0){
        tree.left = null
    }else{
        let root = new TreeNode(leftPreOrderArr[0])
        let rootIndex = leftInOrderArr.indexOf(leftPreOrderArr[0])
        let leftInOrderArr2 = leftInOrderArr.slice(0, rootIndex)
        let rightInOrderArr2 = leftInOrderArr.slice(rootIndex)
        let leftPreOrderArr2 = leftPreOrderArr.slice(1, 1 + rootIndex)
        let rightPreOrderArr2 = leftPreOrderArr.slice(1 + rootIndex)
        travel(root, leftPreOrderArr2, rightPreOrderArr2, leftInOrderArr2, rightInOrderArr2)
    }

    if(rightPreOrderArr.length === 0){
        tree.right = null
    }else{
        let root = new TreeNode(rightPreOrderArr[0])
        let rootIndex = rightInOrderArr.indexOf(rightPreOrderArr[0])
        let leftInOrderArr2 = rightInOrderArr.slice(0, rootIndex)
        let rightInOrderArr2 = rightInOrderArr.slice(rootIndex)
        let leftPreOrderArr2 = rightPreOrderArr.slice(1, 1 + rootIndex)
        let rightPreOrderArr2 = rightPreOrderArr.slice(1 + rootIndex)
        travel(root, leftPreOrderArr2, rightPreOrderArr2, leftInOrderArr2, rightInOrderArr2)
    }

}

let treeArr = []
let root = buildTree(preOrderArr,inOrderArr)
function printTree(root){
    let cur = root
    while(cur){
        if(root.left){
            treeArr.push(root.left.val)
            printTree(root.left)
        }
        if(root.right){
            treeArr.push(root.right.val)
            printTree(root.right)
        }
    }
    return treeArr
}