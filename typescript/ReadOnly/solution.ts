type ReadOnly<T extends Record<string, any>> = { readonly [P in keyof T]: T[P] }

interface obj {
    title: string,
    description: string

}
type test = ReadOnly<obj>
