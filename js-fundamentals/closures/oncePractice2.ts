function once<TArgs extends unknown[], U>(cb: (...args: TArgs) => U): () => U {
    let result: U;
    let called: boolean = false
    return function (...args: TArgs) {
        if (!called) {
            return result
        }
        called = true
        result = cb(...args)
        return result
    }
}


export { }
