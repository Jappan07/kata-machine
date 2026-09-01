# Execution context
- It is a space where javascript code is executed. It has thread of execution through which
the code is run line by line and a place to store the data (memory).

- The process of going through code line by line is called thread of execution.

- When a function is called it creates a new execution context with its own thread of execution and local memory.

- The local memory and execution context of the function gets destroyed when the function finishes execution.
Only the returned value survives.

- Parentheses () after a function's name indicates that the function has to be invoked, run, executed or called.

- An argument is what is a value being passed to a function and parameter is an identifier of the function where that value
is taken into the function when it is called.

- Global execution context is the main execution context which is created as soon as Js starts running.
It contains the thread of execution and memory for overall file of code.


## Create counter solution
The count remains accessible because the methods were created inside createCounter's execution context or lexical scope.
Outside code cannot access count directly and only the methods inside can access it.
