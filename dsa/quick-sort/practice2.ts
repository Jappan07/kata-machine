function partition(arr: number[], low: number, high: number) {

    let i = low
    let j = low
    const pivot = arr[high]

    while (j < high) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
        }
        j++
    }

    [arr[i], arr[high]] = [arr[high], arr[i]]

    return i
}

function quickSort(arr: number[], low: number, high: number) {
    // base case
    if (low >= high) {
        return
    }

    // find pivot
    const pivotIndex = partition(arr, low, high)

    // left side
    quickSort(arr, low, pivotIndex - 1)

    // right side
    quickSort(arr, pivotIndex + 1, high)
}


export { }
