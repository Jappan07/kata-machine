# Functions are first class objects in Javascript
- Can be assigned to variables
- Passed as arguments into functions
- Returned as values from functions

# HOC
A higher order function is a function that takes in another function as input parameter or return out another function
as an output value

# Callback function
A callback function is a function that is passed as an argument to the hoc function.
They can run directly inside the funcition they are passed into.

Imperative code describes step-by-step how to do something (like picking each element, making changes, using push).
Declarative code describes what you want to have happen in a more readable way. Under the hood of any declarative code,
there must be imperative code showing how to actually do it.

## map
Transforms every element
Returns a new array

Mistakes log:
- Did not send all the arguments to callback fn
- Used unkown types instead of generics
- did not return the new array from the map function

## forEach
Does this mutate the original array?
forEach itself does not modify the array elements, but if you change the elements inside the callback,
the original array will be mutated.
Performs an action
returns undefined

# splice, sort & reverse
Mutates the original array
