// Mapped types in TypeScript allow you to create new types by transforming properties of an existing type.
// The syntax {[P in K]: T[P]} is called a mapped type.
// In this example, [P in K] iterates over each property P in the union K (which extends keyof T),
// and T[P] gets the type of that property.
// So, MyPick constructs a new type by picking keys K from T and including their types.

type MyPick<T extends Record<string, any>, K extends keyof T> = { [P in K]: T[P] };

export { }
