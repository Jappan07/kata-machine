class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashmap: Record<number, number> = {}
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            const toFind = target - num
            if (hashmap[toFind] !== undefined) {
                return [hashmap[toFind], i]
            }
            hashmap[num] = i
        }
        return []
    }
}
