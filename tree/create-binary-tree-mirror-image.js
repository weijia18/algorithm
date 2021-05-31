function createBinaryMirrorTree(root){
  let mirrorRoot = null
  function createBinaryMirrorTreeInner(root,type) {
    if(type === 1){
      mirrorRoot = mirrorRoot.left
    }else if(type === 0){
      mirrorRoot = mirrorRoot.right
    }
    let p = root
    if(p != null){
      mirrorRoot.left = createBinaryMirrorTreeInner(p.right, 1)
      mirrorRoot.right = createBinaryMirrorTreeInner(p.left, 0)
    }
    return mirrorRoot
  }
  return createBinaryMirrorTreeInner(root, 2)
}