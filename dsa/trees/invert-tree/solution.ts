type TreeNode<T> = {
    value: T,
    left: TreeNode<T> | null,
    right: TreeNode<T> | null,
}

function invert<T>(root: TreeNode<T> | null) {
    if (!root) {
        return
    }

    [root.left, root.right] = [root.right, root.left]

    invert(root.left)
    invert(root.right)
}
