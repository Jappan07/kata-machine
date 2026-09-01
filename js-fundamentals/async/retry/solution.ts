async function retry<T>(fn: () => Promise<T>, retries: number = 0): Promise<T> {
    let retriedTimes = 0

    do {
        try {
            return await fn()
        }
        catch {
            retriedTimes += 1
        }
    } while (retriedTimes < retries)
}
