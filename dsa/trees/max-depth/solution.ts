type TreeNode<T> = {
    value: T,
    left: TreeNode<T> | null,
    right: TreeNode<T> | null,
}

function maxDepth<T>(root: TreeNode<T> | null): number {
    if (!root) {
        return 0
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}


export { }
