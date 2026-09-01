# Best time to buy sell stock
- Maximize profit and minimize price

Pattern:
Running minimum - minimum value seen so far

Brute force:
Try every buy day with every later sell day

Brute force complexity:
time: O(n^2)
space: O(1)

Optimized:
- Maintain a minPrice at each iterating by comparing with next element
- Calculate the profit at that day and store price - minPrice
- Compare and keep max profit found

complexity:
time: O(n)
space: O(1)

Signal:
Find the best difference between the current value and the minimum value seen before it.
Buying must happen before selling

Key invariant:
Before processing each day, minPrice is the cheapest valid buying price from all earlier days.
maxProfit is the best profit found so far.

Mistakes log:
- No need to sort the array
- It is not a binary because the problem is not monotonic
- .sort on array mutates the original array

Redo date
19th July ✅

Redo date
24th July ✅
