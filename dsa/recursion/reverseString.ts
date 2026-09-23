function reverseString(str: string): string {
    if (str.length === 1) {
        return str
    }

    return str.slice(-1) + reverseString(str.slice(0, -1))
}
