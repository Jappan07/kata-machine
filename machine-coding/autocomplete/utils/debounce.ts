type DebouncedFunction<TArgs extends unknown[]> = {
    (...args: TArgs): void
    cancel: () => void
}

function debounce<TArgs extends unknown[], TResult>(
    callback: (...args: TArgs) => TResult,
    timeout: number = 500,
): DebouncedFunction<TArgs> {
    let timer: ReturnType<typeof setTimeout> | undefined

    const debounced = (...args: TArgs) => {
        clearTimeout(timer)

        timer = setTimeout(() => {
            callback(...args)
        }, timeout)
    }

    debounced.cancel = () => {
        clearTimeout(timer)
        timer = undefined
    }

    return debounced
}

export default debounce
