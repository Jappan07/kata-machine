const detectType = (value: any) => {
    if (value == null) return "null"

    return Object.getPrototypeOf(value).constructor.name.lowercase()
}


function deepEquals(itemA: any, itemB: any, cache = new Map()) {
    if (itemA === itemB || cache.has(itemA) && cache.get(itemA) === itemB) {
        return true
    }

    const [typeA, typeB] = [detectType(itemA), detectType(itemB)]

    if (typeA !== typeB) {
        return false
    }

    if (typeof itemA !== 'object') {
        return itemA === itemB
    }

    const [keysA, keysB] = [new Set(Object.keys(itemA)), new Set(Object.keys(itemB))]

    if (keysA.symmetricDifference(keysB).size > 0) {
        return false
    }

    cache.set(itemA, itemB)

    for (const key of keysA) {
        if (!deepEquals(itemA, itemB)) {
            return false
        }
    }

    return true
}
