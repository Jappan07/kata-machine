# Linked List
It is a node based data structure which maintains a value and a refrence/pointer to the next node (singly linked list)
or previous node (for doubly linked lists)

Unlike arrays they support deletion, insertion with constant time and do not require shifting of indices when modifying
the list

Singly linked list has unidirectional traversal coz it only contains the next pointer
Doubly linked list has bidirectional traversal coz it contains both the next and the previous pointer

Insertion in linked list works by adjusting the pointers
The insertion operation is O(1) but finding the insertion point may take O(n)

Linked lists use heap allocated memories


# Mistakes log
- The current should have head in getNode
- In prepend the node should have next = head
- Don't forget to increment and decrement the size when applicable
- Remember when removing a node we need to find the prev but if index is 0 then handle it separately
- Don't forget to define the return type of the function
