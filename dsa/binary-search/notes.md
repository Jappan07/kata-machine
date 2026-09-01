# Binary Search  0|1
- Works on ordered data set
- Benefit of having an ordered data set is that you can have strategic jumps to find the element instead of checking each and every element
- If jumping 10% then you still have time complexity as O(n) because N + 0.1N is N. You might endup jumping through entire array
- Binary search reduces the search space with each iteration. Basically halves the search space in each iteration by checking the middle element and determining
whether to search the left or right half of the remaining array
- Time complexity is O(Log(n)). Meaning the number of steps grows logarithmically with the size of the input array
- Mid point = floor(Lo + (Hi - Lo )/2)
- A sentinel value -1 is typically returned when the needle cannot be found in the array

Time:
O(LogN)

Space:
O(1)

The distinction to retain:
lo, hi, mid → indexes
haystack[mid] → value
needle → target value

## Always check first if the array is sorted or not

## Loop condition = lo<=hi

## Why mid+1 and mid-1?
You have already checked mid.

## Look for monotonic conditions

Mistakes log:
- Started by using elements as lo and hi instead of indices. That would create averages but we are searching mid point of the array
- compared mid index with target/needle. The mid value needed to be compared
- Failing on 1 element array


Practice 2
Mistakes log:
- The mid point calculation was outside the while loop hence the loop was never ending


# Crystal Balls Problem
- Jump by √n using the first ball
- When it breaks, step back √n
- Scan linearly with the second ball
- Return the first true

Pattern: Jump search / block search

Why √n: Makes the linear problem sub-linear

Time: O(√n)

Space: O(1)

Mistake: Initially returned the jump point instead of scanning the previous block


# Search Insert Position
Mistake:
1. Be inclusive in this condition because we are missing out on the last comparison
    while (left <= right)
2. Return left not mid

Redo date: 25th july ✅
