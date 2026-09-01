# Bubble Sort Algorithm
It compares adjacent elements and swaps them if they are in wrong order, moving the largest element to the end
of the array in each iteration
The number of comparisons decrease with each pass, as the last the element gets sorted and is no longer compared


# Complexity
Time: O(n^2)


# Mistakes log
- No need to keep the inner loop as it only runs once
- Swap j with j+1 not i with j
- Only compare inside the unsorted portion and stop before j+1 goes out of bonds
- One small optimization, stop the i loop when j loop had no swapping
