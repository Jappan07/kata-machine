## Implement `myExtends(SuperType, SubType)` that mimics ES5-style prototype inheritance by combining two constructor functions into one.

The returned constructor should satisfy three requirements:

1. It should call both `SuperType` and `SubType` constructors, so the instance gets properties from both.
2. Its instances should be able to use methods from both `SuperType.prototype` and `SubType.prototype`.
3. The returned constructor itself should inherit static methods from `SuperType`.

So the problem is really testing three separate things:

```txt
constructor calls -> instance properties
prototype chain   -> instance methods
static chain      -> static methods
```

## Solution
3 parts
copy instance properties to ExtendedType
copy instance methods to ExtendedType
copy static methods to ExtendedType

first part can be solved using .apply()
second part can be solved using setProtoTypeOf between Subtype.prototype & Supertype.prototype
third part can be solved using setProtoTypeOf b/w ExtendedType and SuperType
