type TreeNode<T> = {
    value: T,
    left: TreeNode<T> | null,
    right: TreeNode<T> | null,
}

function isSame<T>(root1: TreeNode<T> | null, root2: TreeNode<T> | null): boolean {
    if (!root1 && !root2) {
        return true
    }

    if (!root1 || !root2) {
        return false;
    }

    if (root1.value !== root2.value) {
        return false
    }

    if (!isSame(root1.left, root2.left)) {
        return false
    }

    if (!isSame(root1.right, root2.right)) {
        return false
    }

    return true
}

export { }
