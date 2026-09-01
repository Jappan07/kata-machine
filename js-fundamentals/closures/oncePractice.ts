function oncee<TArgs extends unknown[], TResult>(callback: (...args: TArgs) => TResult): (...args: TArgs) => TResult {
    let result: TResult;
    let called: boolean = false

    return function (...args: TArgs) {
        if (called) {
            return result
        }
        called = true
        result = callback(...args)
        return result
    }

}
