type SNode<T> = {
    value: T;
    next: SNode<T> | null
}


type Stack<T> = {
    push(item: T): void;
    pop(): T | undefined
    peek(): T | undefined
}


function createStack<T>(): Stack<T> {
    let head: SNode<T> | null = null
    let tail: SNode<T> | null = null

    return {
        push(item: T) {
            const node = {
                value: item,
                next: head
            }

            head = node

            if (!tail) {
                tail = node
            }
        },
        pop() {
            if (!head) return undefined
            const removed = head
            head = head.next

            if (!head) {
                tail = null
            }

            return removed.value
        },
        peek() {
            return head?.value
        }

    }
}
