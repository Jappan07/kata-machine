# Remove duplicates from sorted array
2 pointers - Because the array is sorted duplicates are adjacent so whenever current differs from previous, you have found
a unique element
i = current element being inspected
and
k(write) k = next position where a unique value should be written
find unique elements

## Everything before k contains the unique values found so far, in correct order.

## Complexity
Time: O(n)
Space: O(1)


Redo date: sep 5 ✅
