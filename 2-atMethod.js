/*
Array.prototype.at()
The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. 
Negative integers count back from the last item in the array.
*/

const arr = ["111", "222", "333", "444", "555"];

console.log(arr[1]); // "222"
console.log(arr[-2]); // "undefiend"

console.log(arr.at(-1)); // "555"
console.log(arr.at(2)); // "333"



/*
Calling at() on non-array objects
The at() method reads the length property of this and calculates the index to access.
*/

const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
};

console.log(Array.prototype.at.call(arrayLike, -1)); // "b"
