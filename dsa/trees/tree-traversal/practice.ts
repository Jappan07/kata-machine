type TreeNode<T> = {
    value: T,
    left: TreeNode<T> | null
    right: TreeNode<T> | null
}


function preorder<T>(root: TreeNode<T> | null): T[] {
    if (!root) {
        return []
    }

    const leftValues = preorder(root.left)
    const rightValues = preorder(root.right)

    return [root.value, ...leftValues, ...rightValues]
}

function inorder<T>(root: TreeNode<T> | null): T[] {
    if (!root) {
        return []
    }
    const leftValues = preorder(root.left)
    const rightValues = preorder(root.right)

    return [...leftValues, root.value, ...rightValues]
}




function postorder<T>(root: TreeNode<T> | null): T[] {
    if (!root) {
        return []
    }
    const leftValues = preorder(root.left)
    const rightValues = preorder(root.right)

    return [...leftValues, ...rightValues, root.value]
}


export { }
