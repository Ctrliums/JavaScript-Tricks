/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Object.is()
The Object.is() static method determines whether two values are the same value.
*/

console.log(Object.is(-0, 0)); // false
console.log(-0 === 0); // true

console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false

console.log(Object.is(NaN, 0/0)); // true
console.log(NaN === 0/0); // false
/////////////////////////////////////////////////////////////////////////////////////////////////////

/* more example */
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
