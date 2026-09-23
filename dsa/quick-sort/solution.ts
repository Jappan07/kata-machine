function partition(
    arr: number[],
    low: number,
    high: number
): number {
    // return final pivot index
    const pivot = arr[high];
    let i = low
    let j = low
    while (j < high) {
        if (arr[j] < pivot) {
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
        }
        j++
    }

    const temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;

    return i
}


function quickSort(arr: number[], low: number, high: number) {
    // base case
    if (low >= high) {
        return
    }

    // partition
    const pivotIndex = partition(arr, low, high)

    // left side
    quickSort(arr, low, pivotIndex - 1)

    // right side
    quickSort(arr, pivotIndex + 1, high)
}


const arr = [5, 3, 7, 2, 8, 1, 4];

quickSort(arr, 0, arr.length - 1);

console.log(arr);
// [1, 2, 3, 4, 5, 7, 8]
