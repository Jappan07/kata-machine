type ArrayList<T> = {
    add: (value: T) => void
    get: (index: number) => T
    set: (index: number, value: T) => void
    removeAt: (index: number) => T
    size: () => number
    capacity: () => number
}

function createArrayList<T>(initialCapacity: number = 4) {
    let arr = new Array<T | undefined>(initialCapacity)
    let length: number = 0

    function expandCapacity() {
        let elements = new Array<T | undefined>(arr.length * 2)
        for (let i = 0; i < length; i++) {
            elements[i] = arr[i]
        }

        arr = elements
    }

    return {
        add: function (value: T) {
            if (length = arr.length) {
                expandCapacity()
            }

            arr.push(value)
            length++
        },
        set: function (index: number, value: T) {
            arr[index] = value
        },
        get: function (index: number) {
            return arr[index]
        },
        removeAt: function (index: number) {
            let remove = arr[index]
            for (let i = index; i < arr.length; i++) {
                arr[i] = arr[i + 1]
            }

            arr[length - 1] = undefined
            length--

            return remove
        },
        capacity: function () {
            return arr.length
        },
        size: function () {
            return length
        }
    }
}
