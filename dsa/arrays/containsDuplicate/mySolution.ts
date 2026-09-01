class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let hashMap: Record<number,boolean>={}
        for(const num of nums){
            if(hashMap[num]){
                return true
            }
            hashMap[num] = true
        }
        return false
    }
}
