# Merge sorted arrays
- Have 2 pointers pointing to the last filled element of the first array (i) and the last element of the second array (j)
- Have a write pointer (k) to the last element of the first array that will help in filling the array
- Loop: While i and j are more than or equal to 0
- Compare if ith element is smaller than jth element then move j and k to the left
- Compare if ith element is greater than jth element then move i and k to the left
- because there could be a situation you exhaust the i so fill the remaining j elements to the first array

Signal: 2 pointers

Mistakes log:
1. Forgot to decrease k for both the cases
2. Didn't know why is it needed to fill the remaining second array elements

# practice
Everything to the right of the k is already in its sorted position
Only leftover nums2 need to be copied to nums1 because everything leftover is in nums1 at the correct order
Mistakes log:
- Forgot to decrease k when filling the remaining second array elements


Redo date: 26th july ✅
Redo date: 5th Sept ✅
