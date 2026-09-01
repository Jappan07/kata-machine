class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let hashMap: Record<number, number> = {}

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            const toFind = target - num
            if (hashMap[toFind] !== undefined) return [hashMap[toFind], i];
            hashMap[num] = i
        }
        return []
    }
}
