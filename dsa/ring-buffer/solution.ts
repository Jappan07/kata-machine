type RingBuffer<T> = {
    enqueue: (value: T) => void
    dequeue: () => T | undefined
    peek: () => T | undefined
    size: () => number
    isEmpty: () => boolean
    isFull: () => boolean
}

function createRingBuffer<T>(capacity: number) {
    let arr = new Array<T | undefined>(capacity)
    let head = 0
    let tail = 0
    let length: number = 0

    return {
        enqueue: function (value: T) {
            if (length === capacity) {
                console.log("ring buffer full");
                return
            }

            arr[tail] = value
            tail = (tail + 1) % capacity
            length++
        },
        dequeue: function () {
            if (length === 0) {
                return undefined
            }

            const remove = arr[head]
            arr[head] = undefined
            head = (head + 1) % capacity
            length--

            return remove
        },
        peek: function () {
            if (length === 0) {
                return undefined
            }

            return arr[head]
        },
        isEmpty: length === 0,
        isFull: length === capacity
    }
}
