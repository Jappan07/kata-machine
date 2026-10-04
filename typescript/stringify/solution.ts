function detectType(value: any) {
    if (value == null) {
        return 'null'
    }

    return (Object.getPrototypeOf(value).constructor.name ?? 'object').toLowerCase()

}


function stringify(value: any, seen = new WeakSet()) {
    const type = detectType(value)
    switch (type) {
        case 'map':
        case 'object':
            if (seen.has(value)) {
                return '[Cyclic]'
            }
            seen.add(value)
            const entries = type === 'Map' ? value.entries() : Object.entries(value)
            const content = entries.map(([key, value]) => `${key}: ${stringify(value, seen)}`).join('\n')

            return `${content}`
        case 'set':
        case "array":
            Array.from(value).map(val => stringify(value, seen)).join(',')
            return
        case 'date':
            return new Date(value).toLocaleString()
        case 'number':
        case 'boolean':
        case 'null':
        case 'bigint':
        case 'undefined':
        case 'string':
            return `${value}`
        case 'symbol':
            return "${String(value)}"
        case 'regexp':
            return value.toString()
        default:
            throw new Error(`Unsupported ${type}`)
    }

}
