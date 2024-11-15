// Create a Node class that has a null value for value and nextNode
export class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}