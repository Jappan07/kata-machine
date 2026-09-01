type QNode<T> = {
    value: T,
    next: QNode<T> | null
}

type TQueue<T> = {
    peek(): T | undefined;
    enqueue(item: T): void;
    dequeue(): T | undefined
}

function createQueue<T>(): TQueue<T> {
    let head: QNode<T> | null = null
    let tail: QNode<T> | null = null

    return {
        peek() {
            return head?.value
        },
        enqueue(item: T) {
            const node: QNode<T> = {
                value: item,
                next: null
            }

            if (!head) {
                head = tail = node
                return
            }

            tail!.next = node
            tail = node
        },
        dequeue() {
            if (!head) {
                return undefined
            }

            const removed = head
            head = head.next

            // If the queue becomes empty after removal, both head and tail should be null.
            // This ensures that both invariant and fast enqueue work for the empty queue case.
            if (!head) {
                tail = null
            }

            return removed.value
        }
    }
}

export { }
