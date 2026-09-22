# Detect Type

## Problem

Implement a `detectType` function that returns the type of any JavaScript value as a lowercase string.

## Naive Solution
- Naive solution: Using typeof we need to check every instanceOf
- For arrays if we check typeof then we will get object not array data type. typeof works great with primitives only.
- null is reported as object when using typeof


## Optimised solution
- Use getPrototypeOf on the value to get access to the [[Prototype]] object to get access to the constructor's name where the true data type is present

## Mental Model
Every object points to a prototype. That prototype can help identify what kind of object it is.
Object.getPrototypeOf(arr) === Array.prototype

Mistakes log:
- null has no prototype so Object.getPrototypeOf(null) throws
