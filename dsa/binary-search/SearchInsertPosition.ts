function searchInsert(nums: number[], target: number): number {
    let size = nums.length
    let left = 0
    let right = size - 1

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] === target) return mid

        if (nums[mid] < target) {
            left = mid + 1
        }
        else right = mid - 1
    }

    return left
};
