type First<T extends readonly any[]> = T extends [infer First, ...any] ? First : never

export { }
