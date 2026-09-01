function map<T, U>(arr: T[], cb: (el: T, index: number, arr: T[]) => U): U[] {
    const result: U[] = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i], i, arr))
    }

    return result
}


const result = map([1, 2, 3, 4], (el, index, arr) => {
    return el * 2
})

console.log(result);
