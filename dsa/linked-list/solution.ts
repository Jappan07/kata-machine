// type TNode<T> = {
//     value: T;
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


// function createLinkedList<T>(): LinkedList<T> {
//     let head: TNode<T> = null
//     let tail: TNode<T> = null
//     let size = 0

//     function getNode<T>(index: number): TNode<T> {
//         if (index < 0 || index >= size) {
//             return null
//         }
//         let current = head
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
//             const node = {
//                 value: item,
//                 next: null
//             }

//             if (!head) {
//                 head = tail = node
//             }
//             else {
//                 tail.next = node
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
//                 head = tail = node
//             }
//             size++
//         },
//         get(index: number) {
//             return getNode(index)?.value
//         },
//         insertAt(item: T, index: number) {
//             if (index < 0 || index >= size) {
//                 return
//             }

//             if (index === 0) {
//                 this.prepend(item)
//                 return
//             }

//             if (index === size) {
//                 this.append(item)
//                 return
//             }


//             let prev = getNode(index - 1)

//             const node = {
//                 value: item,
//                 next: prev!.next
//             }

//             prev!.next = node
//             size++

//             return
//         },
//         removeAt(item: T, index: number) {
//             if (index < 0 || index >= size) {
//                 return
//             }


//         }
//     }

// }
