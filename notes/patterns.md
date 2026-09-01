# Big O
Big O tells how time or memory grows as input size grows.
As input grows how fast does computation or memory grows.

- Oh of N, this means your algorithm is going to grow linearly based on input.
- Drop constants because they don't make much of a difference and we are just estimating the complexity here.
- It only tells you how the algorithm will behave if the input becomes very large.
- Worst case scenario is taken.
- Trick: If the input halves at each step, its likely O(Log(n)) or O(nLog(n))

# Arrays
Contiguous (meaning unbreaking) memory
- 4 bytes per each memory slot
- Fixed length
- Accessing element using arr index is O(1)


# Why for small inputs quick sort performs worse than insertion sort
Because there is a lot of overhead that goes into the setup of quick sort meaning the constant part is bigger
than the insertion sort but for very large inputs quick sort wins.

# Why use callback functions?
To promote reusability and DRY principal




Contains Duplicate
Expected: instant Set pattern

Two Sum
Expected: Map/complement lookup

Merge Sorted Array
Expected: maybe slight hesitation, but should recall fill-from-back

Remove Duplicates
Expected: write pointer, k starts at 1

Move Zeroes
Expected: write non-zero values forward, then fill zeroes

Valid Palindrome
Expected: two pointers from both ends, skip non-alphanumeric
