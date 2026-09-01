## Contains Duplicate

Brute force:
Compare every pair using i and j loops (n^2)

Optimized:
Use a Set to track numbers already seen.

Time:
O(n)

Space:
O(n)


Better solution
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let seen = new Set<number>()
        for(const num of nums){
            if(seen.has(num)) return true
            seen.add(num)
        }
        return false
    }
}


Mistakes log:
- Found it difficult to exit the loop using map or for each. Shifted to while loop and resolved the struggle
- Forgot to increment the i value when using hashmap
- Could have avoided using i at all because we just to keep a check if it occurred in the map or not


Practice 2
- Preferred a hashmap because Set seems like a cheat code
- Remembered to use a record of number, boolean to make things easy
- checked if the number did not have undefined value then return true (we have found a duplicate) otherwise add it to seen hashmap
- basically if i have seen the number in the next iteration then we have found the duplicate

Mistakes log
none


Retained ✅
