/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Array.prototype.flat()
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/

const arr = [1, 2, 3, [4, 5, 6]];

arr.flat();

console.log(arr); // [1, 2, 3, 4, 5, 6]
/////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Using flat() on sparse arrays
The flat() method removes empty slots in arrays:
*/

const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]



/*
Calling flat() on non-array objects
The flat() method reads the length property of this and then accesses each integer index. If the element is not an array, 
it's directly appended to the result. If the element is an array, it's flattened according to the depth parameter.
*/

const arrayLike = {
  length: 3,
  0: [1, 2],
  // Array-like objects aren't flattened
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
};
console.log(Array.prototype.flat.call(arrayLike)); // [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
