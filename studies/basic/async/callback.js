'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.

console.log(1); // 1
console.log(2); // 2
console.log(3); // 3

// asynchronous
// 콘솔 메소드에 찍힌 순서 : 1 -> 3 -> 2
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);