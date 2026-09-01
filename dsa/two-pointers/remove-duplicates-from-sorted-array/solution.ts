function removeDuplicates(nums: number[]): number {
    let i = 1
    let k = 1

    for (; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};
