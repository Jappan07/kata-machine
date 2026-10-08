type TreeNode<T> = {
    value: T,
    left: TreeNode<T>,
    right: TreeNode<T>
}

function preorder<T>(root: TreeNode<T> | null): T[] {
    // base case
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

    const leftValues = inorder(root.left)
    const rightValues = inorder(root.right)

    return [...leftValues, root.value, ...rightValues]

}

function postOrder<T>(root: TreeNode<T> | null): T[] {
    if (!root) {
        return []
    }

    const leftValues = postOrder(root.left)
    const rightValues = postOrder(root.right)


    return [...leftValues, ...rightValues, root.value]
}
