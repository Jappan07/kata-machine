function map<T, U>(arr: T[], cb: (el: T, index: number, arr: T[]) => U): U[] {
    const result: U[] = []

    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i], i, arr))
    }

    return result
}
