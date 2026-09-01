function isPalindrome(s: string): boolean {
    let left = 0
    let right = s.length - 1

    const isAlphanumeric = (char: string) => {
        return /[a-zA-Z0-9]/.test(char)
    }

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left += 1
        }

        while (left < right && !isAlphanumeric(s[right])) {
            right -= 1
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
        left += 1
        right -= 1
    }
    return true
};
