function forEach<T, U>(arr: T[], cb: (el: T, index: number, arr: T[]) => U): void {
    for (let i = 0; i < arr.length, i++;) {
        console.log(arr[i]);

        cb(arr[i], i, arr)
    }
}



forEach([1, 2, 3, 4], (el) => {
    console.log(el)
})
