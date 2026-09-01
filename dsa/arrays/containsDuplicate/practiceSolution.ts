class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen: Record<number, boolean> = {}
        for (let num of nums) {
            if (seen[num] !== undefined) return true
            else seen[num] = true
        }
        return false
    }
}
