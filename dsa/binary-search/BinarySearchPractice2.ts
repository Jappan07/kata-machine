function binarySearch(arr: number[], target: number) {
    let size = arr.length
    let left = 0
    let right = size - 1

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)

        if (arr[mid] === target) {
            return true
        }

        if (arr[mid] > target) {
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }

    return false
}
