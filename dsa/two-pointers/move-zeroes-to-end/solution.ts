function moveZeroes(nums: number[]): void {
    let w = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[w] = nums[i]
            w++
        }
    }

    while (w < nums.length) {
        nums[w] = 0
        w++
    }


    console.log(nums)
};


moveZeroes([0, 1, 0, 3, 12])
