function memoize<TArgs extends unknown[], TResult>(callback: (...args: TArgs) => TResult): (...args: TArgs) => TResult {
    const cache = new Map<string, TResult>()


    return function (...args: TArgs): TResult {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key) as TResult
        }

        const result = callback(...args)
        cache.set(key, result)
        return result
    }

}




const addTwoNumbers = memoize((a: number, b: number) => a + b)
