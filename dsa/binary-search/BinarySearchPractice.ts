function binarySearch(arr: number[], target: number): boolean {
    let left = 0;
    let right = arr.length - 1

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2)
        if (arr[mid] === target) {
            return true
        }
        if (arr[mid] < target) {
            left = mid + 1
        }
        else right = mid - 1
    }

    return false
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))
