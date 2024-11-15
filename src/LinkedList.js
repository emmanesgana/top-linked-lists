/* 

* Linked Lists

Structure:
- Linke dlists are a linear data structure
- [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null
- Head(Start of the list) -> Node(Element inside the list) -> Null(the last element of the list)
    - Head is a pointer to where we traversing to null or an empty value.
    - Node consists of two parts, the data it holds and a pointer to reference the next node.
        - A node only knows about what data it contains, and who its neighbor is.
        - The last node references Null.
    - 

- Create a way to add an element in the list.
- Create a way to delete an element by traversing to the first element until it finds its match.
    - When also deleting, the previous element should point to the next of the deleted element.
    - For example
        - John -> Karl -> Susan -> Zoe -> Null
        - We'd like to delete Susan so we have to find her by starting from John.
        - If we already found Susan, we can now remove her.
        - After removing Susan we have to update Karl's pointer to the element after Susan which is Zoe.
        - Now the list shoud look like this:
            - John -> Karl -> Zoe -> Null
- Create a way to delete null and insert it back after adding a new element.s

Adding a new element:
- When adding a new element between elements, 

*/

import { Node } from "./Node.js";

// Create a LinkedList class
export class LinkedList {
    // Create a constructor that consists ot headNode that has a default value of null
    constructor(headNode = null) {
        this.headNode = headNode;
    }

    // Create append(value) which adds a new node containg value to the end of the list
    append(value) {

        // Assign new Node class to a variable
        let newNode = new Node(value);

        /* 
        Create a condition wherein if headNode is null we create a new head
        else we create a new variable to store the current headNode and use a while loop
        to iterate each nextNode and assign it to currentNode
        */
        if (!this.headNode) {
            this.headNode = newNode;
        } else {
            let currentNode = this.headNode;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;

            }
            currentNode.nextNode = newNode;
        }
    }

    // Create prepend(value) which adds a new node containing value to the start of the list
    prepend(value) {

        // Assign new Node class to a variable
        let newNode = new Node(value);

        // Transfer the current headNode to nextNode
        newNode.nextNode = this.headNode;

        // Replace the headNode with newNode value
        this.headNode = newNode;
    }

    // Create size which returns the total number of nodes in the list
    size() {

        // Create a count variable with a default value of 0
        let count = 0;

        // Create a variable currentNode and assign the current headNode
        let currentNode = this.headNode;

        // Create a while loop where it loops until currentNode is true
        while (currentNode) {
            // increment count per item
            count++;

            // Assing the next remaining nodes to currentNode if there's any.
            currentNode = currentNode.nextNode;
        }

        // Return count to display the current size
        return count;
    }

    // Create head which returns the first node in the list
    first() {
        // Return headNode
        return this.headNode
    }

    // Create tail which returns the last node in the list
    tail() {
        /* 
        Create a condition wherein if the headNode is empyy it returns a message that the list is empty and do nothing.
        Otherwise, check else comments for a more detailed explanation.
        */
        if (!this.headNode) {
            return 'Empty List';
        } else {

            // Assign headNode to a variable
            let lastNode = this.headNode;

            /* 
            Create a while loop to go through each node until it reaches the value then assign the last node to the lastNode 
            variable then return it.          
            */
            while (lastNode.nextNode) {
                lastNode = lastNode.nextNode;

            }

            return lastNode;
        }
    }

    // Create at(index) which returns the node at the given index
    at(index) {

        // Create a count variable
        let count = 0;

        // Assign headNode to currentNode variable
        let currentNode = this.headNode;

        // Create a while loop for currentNode
        while (currentNode) {

            /* 
            Create a condition where in if count is equal to index, then return the currentNode value. 
            Otherwise, increment count then assign the nextNode to the current node;
            */
            if (count === index) {
                return currentNode.value;
            } else {
                count++;
                currentNode = currentNode.nextNode;
            }
        }

        // return null if the index does not match the count or if is null 
        return null;
    }

    // Create pop which removes the last element from the list
    pop() {

        // Return empy list message if list is empty
        if (!this.headNode) {
            return 'Empty List';
        }

        // Return null if there's only 1 item in the list
        if (this.size() === 1) {
            this.headNode = null;
            return
        };

        // Assigne headNode to current node variable
        let currentNode = this.headNode;

        /* 
        Loop through the currentNode if the currentNode is not the last node
        the && operator serves as a guide so it makes sure that the currentNode not is not the last node. 
        */
        while (currentNode.nextNode && currentNode.nextNode !== this.tail()) {
            currentNode = currentNode.nextNode;
        }

        // Set nextNode to null after removing the last node
        currentNode.nextNode = null;

    }

    // Create contains(value) which returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        return this.find(value) !== null;
    }

    // Create find(value) which returns the index of the node containing value, or null if not found
    find(value) {
        let currentNode = this.headNode;
        let index = 0;

        while (currentNode) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }

        return null;
    }

    // Create toString which represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString() {

        /* 
            Create a condition wherein if the headNode is empyy it returns a message that the list is empty and do nothing.
            Otherwise, we create a while loop to to display the collection of value
            until the list is null where we add it to the end.
        */
        let list = '';

        if (!this.headNode) {
            return 'Empty List'
        } else {
            let currentNode = this.headNode;
            while (currentNode) {
                list += `(${currentNode.value}) -> `;
                currentNode = currentNode.nextNode;
            }

            list += 'null';
            return list;
        }
    }

    /* Extra Credit */
    // Create insertAt(value, index) which inserts a new node with the provided value at the given index.
    insertAt(value, index) {

        // Use prepend if index is 0 this will add the value to the start of the list
        if (index === 0) {
            this.prepend(value);
            return;
        }

        // Returns an error message if the list is empty
        if (!this.headNode && index > 0) {
            throw new Error('Empty List')
        }

        // Returns an error message if the index is less than 0 or greater than the current size
        if (index < 0 || index > this.size()) {
            throw new Error('The index is greater or less than the index and size.');
        }

        // Create variable for count, new Node and headNode that will be used later
        let count = 0;
        let newNode = new Node(value);
        let currentNode = this.headNode;

        // Traverse the list to find the position using while loop
        while (currentNode) {
            // Check if count is equal to the last index
            if (count === index - 1) {

                // Create a new node
                newNode = new Node(value);

                // Point new node to the previous node that uses the same index before
                // prev <- insertAt
                newNode.nextNode = currentNode.nextNode;

                // Point the previous node to the new node
                // prev -> insertAt
                currentNode.nextNode = newNode;
                return;
            }

            count++;

            // Point current node to next node
            currentNode = currentNode.nextNode;
        }

        // Assign tail to a variable
        let tailNode = this.tail();

        // Create a condition wherein if the index is equal to size appened the new node there.
        if (tailNode) {
            tailNode.nextNode = newNode;
        }
    }

    // Create removeAt(index) which removes the node at the given index
    removeAt(index) {

        // Returns an error message if the list is empty
        if (!this.headNode && index > 0) {
            throw new Error('Empty List');
        }

        // Returns an error message if the index is less than 0 or greater than the current size
        if (index < 0 || index >= this.size()) {
            throw new Error('The index is greater or less than the index and size.');
        }

        // Update head if index is 0
        if (index === 0) {
            this.headNode = this.headNode.nextNode;
            return this.headNode;
        }

        let count = 0;
        let currentNode = this.headNode;
        let previousNode = null;

        // Traverse the list to find the position using while loop
        while (currentNode) {
            if (count === index) {
                // This updates the previous nodes pointer and skip the current node
                previousNode.nextNode = currentNode.nextNode;
                return;
            }

            // Point current node to previous node
            previousNode = currentNode;

            // Point next node to current node
            currentNode = currentNode.nextNode;

            // Count current node until it matches index
            count++;
        }
    }
}