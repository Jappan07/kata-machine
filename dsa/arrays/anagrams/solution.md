# Valid Anagrams
A word is an anagram of a word when the letters are rearranged
Length of the anagrams should be equal
It is a Frquency map problem

Signal: Need to check if both the array contain the same frequency of the same letters
- Increase the count of the first array, decrease the frequency of that letter when traversing the second array
If frequency 0 is encountered return false

Time:
O(n)

Space:
O(n)


## Mistakes log
- Didn't properly know what anagram is
- Solved the problem by just comparing if the second array contains a character which is present in first array
This would return true for ["a","b"] and ["a"] which is not correct
- Length mismatch was not checked which should be the first check



What if the anagram for unicode strings?

Redo Date:
24th July ✅
