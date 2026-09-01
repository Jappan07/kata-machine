# Two sum II

Two pointers
left and right
if sum is equal to the target return indices
If the sum is too small, move left because that smallest value cannot help anymore.
If the sum is too large, move right because that largest value cannot help anymore.
So every time we move a pointer, we only remove a value we’ve proven cannot be part of the answer.

Complexity
O(n)


Invariant: If the answer exists, it is still between left and right.
