type First<T extends readonly any[]> = T extends [] ? never : T[0]


type firstOfArr = First<[1, 2, 3]>
