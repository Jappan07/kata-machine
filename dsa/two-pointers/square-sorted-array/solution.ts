function sortedSquares(nums: number[]): number[] {
    let left = 0
    let right = nums.length - 1
    let w = right
    let newArr = new Array(nums.length)


    while (left <= right) {
        const squareRight = nums[right] ** 2
        const squareLeft = nums[left] ** 2
        if (squareLeft > squareRight) {
            newArr[w] = squareLeft
            left = left + 1
        }
        else {
            newArr[w] = squareRight
            right = right - 1
        }

        w = w - 1
    }

    return newArr
};
