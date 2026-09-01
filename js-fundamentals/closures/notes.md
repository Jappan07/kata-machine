# Closures
A function that returns a function
Allows functions to hold onto data between executions
Functions have access to variables based on where they are defined not where they are called

When a function is returned from another function, it retains access to the variables from where it was originally defined
This is called a backpack or Close Over Variable Environment (COVE) or Persistent Lexical Scoped Referenced Data or Closure
It is called a backpack because it suggests three useful ideas:

- the function takes data with it
- that data remains available wherever the function goes
- the data is not exposed directly to outside code


When a function is defined inside another function's execution context and then returned, what gets attached to it?
A reference to the surrounding data in a persistent store.
Note: Only the data being accessed by the function gets persisted.

What term relates to where a function is defined in the actual code as written, rather than where it executes?
Lexical

# Lexical Scoping
Lexical scoping (also called static scoping) means that a function has access to data based on where it was saved or defined in the code,
determined by its position on the page.
Dynamic scoping would mean a function only has access to data based on where it was called from, not where it was defined.

What are two practical utility functions that are enabled by closure?
- The "once" function which limits how many times a function can be called.
- The "memoize" function which saves the results of computationally expensive work to avoid redoing it when the
function is called again with same inputs.

## Variable environment
The place where variables and data are stored inside a function during its execution

# once
- Run a callback only once
- keep a "called" boolean to track. This will act as the COVE
- use generics

Mistakes log:
- Implementation was not generic
- Implmentation should have generic types

Redo date 25th july ✅


# memoize
Mistakes log
- Did not return the correct function type

Redo date 25th july ✅
