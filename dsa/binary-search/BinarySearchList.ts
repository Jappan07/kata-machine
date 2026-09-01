export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length - 1
    while (lo <= hi) {
        const mid = Math.floor(lo + (hi - lo) / 2)
        const value = haystack[mid]
        if (value === needle) {
            return true
        }

        if (value > needle) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }

    return false
}
