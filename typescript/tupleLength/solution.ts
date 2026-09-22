type TupleLength<T extends readonly any[]> = T['length']

type lengthOfTup = TupleLength<[1, 2, 3, 4]>
