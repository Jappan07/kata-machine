type TNode<T> = {
    value: T;
    next: TNode<T> | null
}


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
    let head: TNode<T> | null = null
    let tail: TNode<T> | null = null
    let size: number = 0


    function getNode(index: number) {
        let current = head
        for (let i = 0; i < index; i++) {
            current = current!.next
        }

        return current
    }

    return {
        get length() {
            return size
        },
        append(item: T) {
            const node: TNode<T> = {
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

            size++
        },
        prepend(item: T) {
            const node: TNode<T> = {
                value: item,
                next: head
            }

            head = node

            if (!tail) {
                tail = head
            }

            size++
        },
        insertAt(item: T, index: number) {
            if (index < 0 || index > size) {
                return
            }

            if (index === 0) {
                this.prepend(item)
                return
            }

            if (index === size) {
                this.append(item)
                return
            }

            const prev = getNode(index - 1)
            prev!.next = {
                value: item,
                next: prev!.next
            }

            size++
        },
        get(index: number) {
            if (index < 0 || index > size) {
                return undefined
            }

            return getNode(index)?.value
        },
        removeAt(index: number) {
            if (index < 0 || index > size - 1) {
                return undefined
            }

            const node = getNode(index)

            if (index === 0) {
                head = head!.next
                size--

                if (!head) {
                    tail = null
                }

                return node!.value
            }

            const prev = getNode(index - 1)
            prev!.next = node!.next
            size--
            return node!.value
        },
        remove(item: T) {
            if (!head) return undefined

            if (head!.value === item) {
                return this.removeAt(0)
            }

            if (tail!.value === item) {
                return this.removeAt(size - 1)
            }

            let current = head

            while (current!.next) {
                if (current?.next.value === item) {
                    const removed = current.next
                    current.next = removed.next
                    size--
                    return removed.value
                }
                current = current!.next
            }

        }
    }
}


const list = createLinkedList<number>()

list.insertAt(10, 0)
console.log(list.length) // should be 1
console.log(list.get(0)) // should be 10

list.append(20)
list.append(30)

console.log(list.removeAt(2)) // should be 30
console.log(list.length)      // should be 2

list.append(40)
console.log(list.get(2)) // should be 40

console.log(list.remove(10)) // should be 10
console.log(list.length)     // should be 2

console.log(list.get(100)) // should be undefined
