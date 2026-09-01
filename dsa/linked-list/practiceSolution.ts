// type TNode<T> = {
//     value: T,
//     next: TNode<T> | null
// } | null

// type LinkedList<T> = {
//     get length(): number;
//     insertAt(item: T, index: number): void;
//     remove(item: T): T | undefined;
//     removeAt(index: number): T | undefined;
//     append(item: T): void;
//     prepend(item: T): void;
//     get(index: number): T | undefined
// }

// function createLinkedList<T>() {
//     let head: TNode<T> = null
//     let tail: TNode<T> = null
//     let size: number = 0

//     function getNode(index: number) {
//         let current: TNode<T> = head
//         for (let i = 0; i < index; i++) {
//             current = current!.next
//         }

//         return current
//     }

//     return {
//         get length() {
//             return size
//         },
//         append(item: T) {
//             const node: TNode<T> = {
//                 value: item,
//                 next: null
//             }

//             if (!head) {
//                 head = tail = node
//             }

//             else {
//                 tail!.next = node
//                 tail = node
//             }

//             size++
//         },
//         prepend(item: T) {
//             const node: TNode<T> = {
//                 value: item,
//                 next: head
//             }

//             head = node

//             if (!tail) {
//                 tail = head
//             }


//             size++
//         },
//         insertAt(item: T, index: number) {
//             if (index === 0) {
//                 this.prepend(item)
//                 return
//             }

//             if (index === size) {
//                 this.append(item)
//                 return
//             }

//             let prev = getNode(index - 1)
//             const node: TNode<T> = {
//                 value: item,
//                 next: prev!.next
//             }
//             prev!.next = node
//             size++
//         },
//         get(index: number) {
//             return getNode(index)?.value
//         },
//         removeAt(index: number) {
//             if (index === 0) {
//                 head = head!.next
//                 size--

//                 if (!head) {
//                     tail = null
//                 }
//             }

//             const prev = getNode(index - 1)
//             const current = getNode(index)
//             prev!.next = current!.next
//             current!.next = null
//             size--
//         },
//         remove(item: T) {
//             if (!head) {
//                 return undefined
//             }

//             if (head.value === item) {
//                 return this.removeAt(0)
//             }

//             let current = head

//             while (current.next) {
//                 if (current.next.value === item) {
//                     const removed = current.next
//                     current.next = removed.next

//                 }
//             }
//         }
//     }
// }
