type TNode<T> = {
    value: T;
    next: TNode<T> | null
    prev: TNode<T> | null
} | null

type LinkedList<T> = {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined
}


function createLinkedList<T>(): LinkedList<T> {
    let size = 0;
    let head: TNode<T> = null
    let tail: TNode<T> = null


    function getNode(index: number) {
        let current = head
        for (let i = 0; i < index; i++) {
            current = current!.next
        }

        return current
    }

    return {
        get length() { return size },
        insertAt() { },
        remove() { },
        removeAt(index: number) {
            if (index < 0 || index >= size) {
                return;
            }

            const current = getNode(index)

            if (!current) {
                return
            }

            if (current.prev !== null) {
                current.prev.next = current.next
            }
            else {
                head = current.next
            }
            if (current.next !== null) {
                current.next.prev = current.prev
            }
            else {
                tail = current.prev
            }

            size--

            return current!.value
        },
        append(item: T) {
            let node = { value: item, next: null, prev: tail }
            size++
            if (!tail) {
                head = tail = node
                return
            }

            tail.next = node
            tail = node
        },
        prepend(item: T) {
            let node = { value: item, next: head, prev: null }
            size++
            if (!head) {
                head = tail = node
                return
            }
            head.prev = node
            head = node
        },
        get(index) {

        },
    }
}

// return {}
