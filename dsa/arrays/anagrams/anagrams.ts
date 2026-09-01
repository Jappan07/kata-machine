function isAnagram(s: string, t: string): boolean {
    let frequency: Record<string, number> = {};

    if (s.length !== t.length) return false

    for (const char of s) {
        frequency[char] = (frequency[char] ?? 0) + 1;
    }

    for (const char of t) {
        if (!frequency[char]) {
            return false;
        }

        frequency[char] = frequency[char] - 1;
    }

    return true
};
