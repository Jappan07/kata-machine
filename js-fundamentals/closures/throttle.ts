function throttle<TArgs extends unknown[], TResult>(cb: (...args: TArgs) => TResult, delay: number): () => TResult | undefined {
    let canRun: boolean = true

    return (...args: TArgs) => {
        if (!canRun) return

        const result = cb(...args)

        canRun = false

        setTimeout(() => {
            canRun = true
        }, delay);


        return result
    }
}
