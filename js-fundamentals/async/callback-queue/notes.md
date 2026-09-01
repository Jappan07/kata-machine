# Callback Queue
The callback queue (or task queue) is an interface between the outside world (like web browser features) and the JavaScript engine.
When asynchronous operations complete, their callback functions are placed in this queue.
However, these functions cannot execute immediately—they must wait until ALL global code has finished executing.
This is a strict rule that ensures predictability: even if a callback is ready (like a setTimeout with 0ms), it will wait until every line of global synchronous code runs first, including any function calls in global scope.
Only after all global code completes can functions be dequeued from the callback queue and added to the call stack to run.


The event loop continuously checks three things:
(1) Is the call stack empty?
(2) Has all global code finished running?
(3) Is there something in the callback queue? It repeats these checks constantly to determine when callback functions can be moved from the callback queue to the call stack for execution.



# What is callback hell?
A callback hell is a deeply nested async callback code that is hard to maintain, look at and error handle.

# What are the two prongs of a two-pronged facade function like fetch?
1 is that it creates a background task in the web browser
the other thing is it immediately returns a special object called promise which can act as a placeholder for the data

# Promises
Special objects built into JavaScript that get returned immediately when we make a call to a web browser API/feature (e.g. fetch) that’s setup to return promises
Promises act as a placeholder for the data we expect to get back from the web browser features background work (stored in hidden property [[Result]])
then method and functionality to call on completion Any code (functions) we want to run on the retrieved (from internet) data must also be saved on the promise object
Added using .then method to the hidden property [[FulfillReactions]]
