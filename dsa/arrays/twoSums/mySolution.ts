class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap: Record<number, number> = {}
        for (let i = 0; i < nums.length; i++) {
            const toFind: number = target - nums[i]
            if (hashMap[toFind] !== undefined) return [hashMap[toFind], i]
            hashMap[nums[i]] = i
        }
        return []
    }
}
