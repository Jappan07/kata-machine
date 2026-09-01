# Two Sums

Brute force:
Compare every pair using i and j loops (n^2)

Optimized:
Use a hashmap to store the number as key and value as index

Signal: Need to find an element which is target - current element in the map (complement)

Time:
O(n)

Space:
O(n)

Mistakes log:
- When using for in loop, i value was a string but we needed number
- Shifted to a generic for loop to fix this issue
- Storing the number in the hashmap before checking can cause matching with itself
(e.g., target=6, nums=[3,1,4,2]: 3 matches itself)
- Always check before storing.

Practice 2
Mistake: checked for truthyness of hashMap[toFind] rather than undefined.
Correct idea: A value 0 can be falsy which is not correct.
Redo date: 13th July


Practice 3
Mistake: took the current number as hashmap[i] rather than nums[i]
Correct idea: The current number is obviously num[i] because we are iterating over the nums array
Redo date: 14th july


Practice 4
Redo date: 16th july

Retained ✅

Redo date: 24th july ✅

Practice 5
Redo date: Sep 1
