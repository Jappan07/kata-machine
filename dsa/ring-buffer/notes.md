# Ring Buffer
A ring buffer, also called a circular buffer, is a fixed-size array where the end connects back to the beginning.

A ring buffer avoids shifting. It keeps two indexes:

head: where the next element will be removed
tail: where the next element will be inserted
