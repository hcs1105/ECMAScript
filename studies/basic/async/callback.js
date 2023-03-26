'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.

console.log(1); // 1
console.log(2); // 2
console.log(3); // 3

// Asynchronous
// 콘솔 메소드에 찍힌 순서 : 1 -> 3 -> 2
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

// Synchronous callback 
function printImmediately(print) {
  console.log(print); // () => console.log('hello')
  print(); // hello
}

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, time) {
  setTimeout(print, time);
}

printWithDelay(() => console.log('Asynchronous callback!'), 2000); // Asynchronous callback!