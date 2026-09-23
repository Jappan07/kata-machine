function partition(nums: number[], low: number, high: number) {
    let i = low
    let j = low
    const pivot = nums[high]

    while (j < high) {
        if (arr[j] < pivot) {
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
        }

        j++
    }
    const temp = arr[i]
    arr[i] = arr[high]
    arr[high] = temp

    return i
}

function quickSort(nums: number[], low: number, high: number) {
    // base case
    if (low >= high) {
        return
    }

    const pivotIndex = partition(nums, low, high)

    // left side
    quickSort(nums, low, pivotIndex - 1)

    // right side
    quickSort(nums, pivotIndex + 1, high)
}


export { }
