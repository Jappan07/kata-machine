# Type Coercion & Metaprogramming

## Coercion rules

JavaScript often converts values automatically depending on the operation.

Common conversion types:

```text
ToBoolean
ToNumber
ToString
ToPrimitive
```

### ToBoolean

Falsy values:

```ts
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is truthy.

Examples:

```ts
Boolean("")        // false
Boolean("0")       // true
Boolean([])        // true
Boolean({})        // true
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false
```

Important lesson:

```text
An empty array and empty object are truthy because they are objects.
```

### ToNumber

Examples:

```ts
Number("")        // 0
Number(" ")       // 0
Number("123")     // 123
Number("123abc")  // NaN
Number(true)      // 1
Number(false)     // 0
Number(null)      // 0
Number(undefined) // NaN
Number([])        // 0
Number([1])       // 1
Number([1, 2])    // NaN
```

### ToString

Examples:

```ts
String(123)       // "123"
String(true)      // "true"
String(false)     // "false"
String(null)      // "null"
String(undefined) // "undefined"
String([])        // ""
String([1, 2])    // "1,2"
String({})        // "[object Object]"
```

## Loose equality traps

Loose equality `==` allows coercion.

Strict equality `===` does not coerce.

Prefer:

```ts
a === b
```

unless there is a deliberate reason to use loose equality.

### Examples

```ts
"" == 0
// true
// "" becomes 0

" " == 0
// true
// " " becomes 0

false == 0
// true
// false becomes 0

true == 1
// true
// true becomes 1

null == undefined
// true
// special rule

null == 0
// false
// null only loosely equals undefined, not 0

undefined == 0
// false

[] == false
// true
```

Why `[] == false` is true:

```text
[] == false
[] == 0
"" == 0
0 == 0
true
```

Why `[] == ![]` is true:

```text
[] is truthy
![] is false

So:
[] == ![]
[] == false
[] == 0
"" == 0
0 == 0
true
```

Important lesson:

```text
Loose equality is not random. It follows rules, but the rules are easy to misuse.
```

## ToPrimitive order

Objects must become primitive values before some operations.

Primitive values:

```ts
string
number
bigint
boolean
symbol
null
undefined
```

Objects are converted using `ToPrimitive`.

JavaScript asks the object:

```text
Can you become a primitive?
```

The conversion uses a hint:

```text
"string"
"number"
"default"
```

For most ordinary objects:

```text
number/default hint:
1. valueOf()
2. toString()

string hint:
1. toString()
2. valueOf()
```

Example:

```ts
const user = {
  valueOf() {
    return 10
  },
  toString() {
    return "User"
  }
}

Number(user)
// 10

String(user)
// "User"

user + 5
// 15
```

Why?

```text
user + 5 uses default/number-like primitive conversion.
valueOf() returns 10.
10 + 5 = 15.
```

## valueOf vs toString

### valueOf

`valueOf()` is used when JavaScript wants a numeric or default primitive value.

Example:

```ts
const item = {
  valueOf() {
    return 100
  }
}

Number(item)
// 100
```

### toString

`toString()` is used when JavaScript wants a string representation.

Example:

```ts
const item = {
  toString() {
    return "Item"
  }
}

String(item)
// "Item"
```

### When both exist

```ts
const obj = {
  valueOf() {
    return 10
  },
  toString() {
    return "hello"
  }
}

Number(obj)
// 10

String(obj)
// "hello"

obj + 5
// 15
```

Important lesson:

```text
valueOf is usually checked first for number/default conversion.
toString is usually checked first for string conversion.
```

## Symbol.toPrimitive

`Symbol.toPrimitive` gives direct control over object-to-primitive conversion.

If it exists, JavaScript calls it before `valueOf` or `toString`.

Example:

```ts
const obj = {
  [Symbol.toPrimitive](hint) {
    console.log(hint)

    if (hint === "number") {
      return 100
    }

    if (hint === "string") {
      return "Object as string"
    }

    return "default value"
  }
}

Number(obj)
// logs: "number"
// returns: 100

String(obj)
// logs: "string"
// returns: "Object as string"

obj + "!"
// logs: "default"
// returns: "default value!"
```

Important lesson:

```text
Symbol.toPrimitive is the most explicit way to control coercion.
```

Priority order:

```text
1. Symbol.toPrimitive
2. valueOf / toString depending on hint
```

## Proxy

A `Proxy` lets us intercept operations on an object.

It wraps a target object and allows custom behavior for operations like:

```text
reading a property
writing a property
checking if a property exists
deleting a property
calling a function
constructing an object
```

Basic example:

```ts
const target = {
  name: "Jeet",
  role: "Frontend Engineer"
}

const proxy = new Proxy(target, {
  get(obj, prop) {
    console.log("reading", prop)
    return obj[prop as keyof typeof obj]
  }
})

proxy.name
// logs: "reading name"
// returns: "Jeet"
```

### set trap

```ts
const user = {
  name: "Jeet"
}

const proxy = new Proxy(user, {
  set(obj, prop, value) {
    console.log("writing", prop, value)
    obj[prop as keyof typeof obj] = value
    return true
  }
})

proxy.name = "New Name"
// logs: "writing name New Name"
```

Important lesson:

```text
Proxy lets us customize object behavior without changing the original object directly.
```

Frontend connection:

```text
Frameworks can use similar ideas to observe reads and writes, track dependencies, and trigger updates.
```

Example use cases:

```text
validation
logging
reactivity systems
access control
mock APIs
debugging tools
```

## Reflect

`Reflect` provides standard methods for performing object operations.

It is often used inside Proxy traps to preserve default behavior.

Example:

```ts
const target = {
  name: "Jeet"
}

const proxy = new Proxy(target, {
  get(obj, prop, receiver) {
    console.log("reading", prop)
    return Reflect.get(obj, prop, receiver)
  },

  set(obj, prop, value, receiver) {
    console.log("writing", prop, value)
    return Reflect.set(obj, prop, value, receiver)
  }
})
```

Why use `Reflect`?

```text
It forwards the operation using JavaScript's default behavior.
It keeps Proxy traps cleaner.
It avoids manually reimplementing object access logic.
```

Proxy + Reflect pattern:

```text
Proxy intercepts.
Reflect performs the original/default operation.
```

## Interview explanation

Type coercion is JavaScript’s process of converting values from one type to another when an operation requires it.

Strict equality avoids coercion, while loose equality allows coercion. Loose equality follows rules, but those rules can produce surprising results like `[] == false` and `[] == ![]`.

When objects need to participate in primitive operations, JavaScript uses `ToPrimitive`. It first checks `Symbol.toPrimitive` if available. Otherwise, it uses `valueOf` and `toString`, depending on the preferred hint.

Metaprogramming means writing code that can customize or intercept the behavior of other code. In JavaScript, `Proxy`, `Reflect`, and `Symbol.toPrimitive` are examples of metaprogramming tools.

A Proxy can intercept object operations like property reads and writes. Reflect is commonly used inside Proxy traps to delegate back to JavaScript’s default behavior.

Frontend frameworks and libraries can use these ideas to build reactive systems, track property access, validate state changes, or create debugging layers.

## Mistakes / surprising examples

### `[] == false`

```ts
[] == false
// true
```

Reason:

```text
false becomes 0
[] becomes ""
"" becomes 0
0 == 0
```

### `[] == ![]`

```ts
[] == ![]
// true
```

Reason:

```text
[] is truthy
![] is false
[] == false
true
```

### `null == undefined`

```ts
null == undefined
// true
```

Reason:

```text
Loose equality has a special rule where null and undefined are equal to each other.
```

### `null == 0`

```ts
null == 0
// false
```

Reason:

```text
null does not loosely equal 0.
null only loosely equals undefined.
```

### `Number("")`

```ts
Number("")
// 0
```

Empty string becomes zero during numeric conversion.

### `Boolean("0")`

```ts
Boolean("0")
// true
```

Non-empty strings are truthy.

### `Boolean([])`

```ts
Boolean([])
// true
```

Arrays are objects, and objects are truthy.

### `Number([])`

```ts
Number([])
// 0
```

Reason:

```text
[] becomes ""
"" becomes 0
```

### `Number([1])`

```ts
Number([1])
// 1
```

Reason:

```text
[1] becomes "1"
"1" becomes 1
```

### `Number([1, 2])`

```ts
Number([1, 2])
// NaN
```

Reason:

```text
[1, 2] becomes "1,2"
"1,2" cannot become a valid number
```

## Summary

```text
Use === by default.
Know coercion rules, do not memorize random tricks.
Objects convert using ToPrimitive.
Symbol.toPrimitive is checked first.
valueOf and toString are fallback conversion methods.
Proxy intercepts object operations.
Reflect forwards default object behavior.
```
