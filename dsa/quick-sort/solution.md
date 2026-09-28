# Quick Sort
n(logn)
n^2 in worst case scenario when the array is sorted in reverse
with last element as pivot, reverse-sorted input creates very uneven partitions

Core idea:
Pick a pivot, partition the array around it, then recursively sort the left and right subarrays.

- Pick a pivot and start comparing elements and swap them if they are less than the pivot. maintain i (write) and j (scanning) pointers
- Do nothing if the element is larger than the pivot
- At the end swap pivot with i and return the pivot index (i)
- Take the pivot index and recursively call the quick sort on first and second part


# Invariant
everthing before i is less than the pivot

Base case:
If low >= high, the subarray has 0 or 1 element and is already sorted.


Time:
Average: O(n log n)
Worst: O(n²)

Why average is O(n log n):
Partitioning costs O(n) per level.
Balanced partitions create about log n levels.


Key mental model:
Partition fixes one pivot permanently.
Then solve the same problem recursively on both sides.
