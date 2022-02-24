var recoverTree = function (root) {
    let stack = []
    let parentStack = []
    let mNode = null
    let sNode = null
    let flag = false
    let mParent = null
    let sParent = null
    var inOrder = function (parent, root, flag) {
        if (root) {
            if (stack.length > 0) {
                if (root.val < stack[stack.length - 1].val && !flag) {
                    mNode = stack[stack.length - 1]
                    mParent = parentStack[parentStack.length - 1]
                    sNode = root
                    sParent = parent
                    flag = !flag
                }
                if (root.val < stack[stack.length - 1].val && flag) {
                    sNode = root
                    sParent = parent
                    flag = !flag
                }
            }
            inOrder(root, root.left, flag)
            stack.push(root)
            parentStack.push(parent)
            inOrder(root, root.right, flag)
        }
    }
    inOrder(root, flag)

    let sleft = sNode.left
    let sright = sNode.right
    sNode.left = mNode.left
    sNode.right = mNode.right
    mNode.left = sleft
    mNode.right = sright
    if (mParent === null) {
        if (sParent.right === sNode) {
            sParent.right = mNode
        } else {
            sParent.left = mNode
        }
        return sNode
    } else if (sParent === null) {
        if (mParent.right === mNode) {
            mParent.right = sNode
        } else {
            mParent.left = sNode
        }
        return mNode
    } else {
        if (mParent.right === mNode) {
            mParent.right = sNode
        } else {
            mParent.left = sNode
        }
        if (sParent.right === sNode) {
            sParent.right = mNode
        } else {
            sParent.left = mNode
        }
        return root
    }
}