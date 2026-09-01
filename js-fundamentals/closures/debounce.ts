function debounce<TArgs extends unknown[], TResult>(callback: (...args: TArgs) => TResult, timeout: number = 500) {
    let timer: ReturnType<typeof setTimeout> | undefined;

    const debounced = (...args: TArgs) => {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            callback(...args)
        }, timeout);
    }

    debounced.cancel = () => {
        timer = undefined
        clearTimeout(timer)
    }

    return debounced
}
