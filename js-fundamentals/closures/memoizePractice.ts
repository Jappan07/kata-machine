function memoise<TArgs extends unknown[], TResult>(callback: (...args: TArgs) => TResult): (...args: TArgs) => TResult {
    const cache = new Map<string, TResult>()

    return function (...args: TArgs) {
        const key = JSON.stringify(args)
        if (cache.get(key)) {
            return cache.get(key) as TResult
        }
        const result = callback(...args)
        cache.set(key, result)
        return result
    }
}


memoise((a: number, b: number) => a + b)
