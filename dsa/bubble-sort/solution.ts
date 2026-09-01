function bubbleSort(arr: []) {
    let size: number = arr.length
    while (size > 1) {
        for (let i = 0; i < size; i++) {
            for (let j = i + 1; j < i + 2; j++) {
                if (arr[i] > arr[j]) {
                    let temp;
                    temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
        size -= 1
    }
}
