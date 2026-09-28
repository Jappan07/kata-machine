type TupleToUnion<T extends readonly any[]> = T[number]

type test = TupleToUnion<[1, 2, 3]>
