# Array List
Also called as dynamic array / resizeable array because it is basically a resizeable array

## size vs capacity
size = number of elements present
capacity = number of available slots

## Appending is described as O(1) amortized.

That means most appends are O(1), but occasionally one append triggers an O(n) resize. Across many appends, the average cost per append remains O(1).
