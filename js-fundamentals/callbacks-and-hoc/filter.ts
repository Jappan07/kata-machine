function filter<T>(arr: T[], cb: (el: T, index: number, arr: T[]) => boolean): T[] {
    const result: T[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr) === false) continue
        else result.push(arr[i])
    }

    return result
}

console.log(filter([1, 2, 3, 4, 5], (el) => el !== 2))
