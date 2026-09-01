function once<TArgs extends unknown[], TResult>(callback: (...args: TArgs) => TResult): (...args: TArgs) => TResult {
    let called = false
    let result: TResult

    return function (...args: TArgs): TResult {
        if (called) {
            return result
        }

        result = callback(...args)
        called = true
        return result
    }

}
