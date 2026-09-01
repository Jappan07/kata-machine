# Square sorted array
In a sorted array either the left end's or the right most end's squares are the largest numbers

Pattern: two pointer
Start a left and right pointer with a write pointer starting from the end.
compare the squares of left and right and put the squared value which is greater at the write pointer and then move the pointer whose value
we have used and decrease the w pointer.

Invariant: up until the w pointer everything is sorted


Mistakes log:
Moved both left and right pointers together and decreased w pointer by 2
Did math.square which is not a function. then used ** to get the square
