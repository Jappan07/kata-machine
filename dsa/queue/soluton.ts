type QNode<T> = {
    value: T;
    next: QNode<T> | null
}


type Queue<T> = {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined
}


function createQueue<T>(): Queue<T> {
    let head: QNode<T> | null = null
    let tail: QNode<T> | null = null


    return {
        peek() { return head?.value },
        enqueue(item: T) {
            const node: QNode<T> = {
                value: item,
                next: null
            }

            if (!head) {
                head = tail = node
            }
            else {
                tail!.next = node
                tail = node
            }
        },
        dequeue() {
            if (!head) return undefined
            const removed = head
            head = head?.next ?? null

            if (!head) {
                tail = null
            }

            return removed?.value
        }
    }
}
