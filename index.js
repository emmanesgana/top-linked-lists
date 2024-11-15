import { LinkedList } from "./src/LinkedList.js";

const list = new LinkedList();

/* Append to list */
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

/* Prepend to list */
list.prepend('capybara');

/* Display the list toString */
console.log(list.toString());

/* Size */
console.log('Size:', list.size());

/* First */
console.log('First:', list.first());

/* Tail - Last node */
console.log('Tail - Last node:', list.tail());

/* at(index) */
console.log('at(index):', list.at(2));

/* Pop */
list.pop();
console.log('Pop (last node was removed):', list.toString());

/* Contains */
console.log('Contains:', list.contains('cat'));

/* Find */
console.log('Find:', list.find('cat'));

/* Insert at */
// (capybara) -> (dog) -> (cat) -> (parrot) -> (hamster) -> (snake) -> null
list.insertAt('kangaroo', 6); // Insert kangaroo after snake
console.log('Insert at list:', list.toString());

/* Remove at */
//  (capybara) -> (dog) -> (cat) -> (parrot) -> (hamster) -> (snake) -> null
list.removeAt(3); // Remove parrot from the list
console.log('Remove at list:', list.toString()); 