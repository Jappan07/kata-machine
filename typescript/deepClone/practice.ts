function getType(value: any) {
    if (value == null) {
        return `${value}`
    }

    return (Object.getPrototypeOf(value)?.constructor?.name ?? 'object').toLowerCase()
}

function createTarget(type: ReturnType<typeof getType>) {

    switch (type) {
        case "set":
            return new Set()
            break;
        case "map":
            return new Map()
        case "object":
            return {}
        case "array":
            return []
        default:
            break
    }

}

function each(target: any, callback: (value: any, key: string | number) => void) {
    if (target instanceof Map || target instanceof Set) {
        target.forEach(callback)
    }
    else {
        Object.entries(target).forEach(([key, value]) => callback(value, key))
    }
}

function addToTarget(key: string | number, target: any, value: any) {
    if (target instanceof Map) {
        target.set(key, value)
    }
    else if (target instanceof Set) {
        target.add(value)
    }
    else {
        target[key as string] = value
    }

}

function deepClone(value: any, cache = new Map()) {
    const type = getType(value)

    if (cache.has(value)) {
        return cache.get(value)
    }

    switch (type) {
        case 'set':
        case 'map':
        case 'object':
        case 'array':
            const target = createTarget(type)
            cache.set(value, target)
            each(target, (value, key) => {
                addToTarget(key, target, deepClone(value, cache))
            })
        case 'date':
            return new Date(value as Date).getTime()
        default:
            return value
    }
}
