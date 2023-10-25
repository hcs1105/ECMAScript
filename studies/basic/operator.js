'use strict';

// 1. String concatenation
console.log('my ' + 'dog'); // my dog
console.log('1' + 2); // 12
console.log(`string literal: 1 + 2 = ${1 + 2}`); // string literal: 1 + 2 = 3
console.log('hcs1105\'s book'); // hcs1105's book
console.log("hcs1105's book"); // hcs1105's book

// 2. Numberic operators
console.log(1 + 1); // add, 1
console.log(1 - 1); // substract, 0
console.log(1 / 1); // divide , 1 
console.log(1 * 1); // multiply, 1
console.log(5 % 2); // remainder, 1
console.log(2 ** 3); // exponentiation, 8

// 3. Increment and decrement operators
let counter = 1;
const preIncrement = ++counter; // counter = counter + 1; preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 2, counter: 2

const postIncrement = counter++; // postIncrement = counter; counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // postIncrement: 2, counter: 3

const preDecrement = --counter; // counter = counter - 1; preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // preDecrement: 2, counter: 2

const postDecrement = counter--; // postDecrement = counter; counter = counter - 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // postDecrement: 2, counter: 1

// 4. Assignment operators
let x = 3; 
let y = 4;

console.log(x += y); // x = x + y; 7
console.log(x -= y); // x = x - y; 3
console.log(x *= y); // x = x * y; 12
console.log(x /= y); // x = x / y; 3

// 5. Comparison operators
console.log(10 < 6); // less than, false
console.log(10 <= 6); // less than or equal, false
console.log(10 > 6); // greater than, true
console.log(10 >= 6); // greater than or equal, true

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // or: true

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // and: false

function check(){
  for(let i = 0; i < 10; i++) {
    // wasting time
    console.log('😭');
  }
  return true;
}

// !(not)
console.log(!value1); // true

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// == strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const hcs11051 = {name : 'hcs1105'};
const hcs11052 = {name : 'hcs1105'};
const hcs11053 = hcs11051;

console.log(hcs11051 == hcs11052); // false
console.log(hcs11051 === hcs11052); // false
console.log(hcs11051 == hcs11053); // true
console.log(hcs11051 === hcs11053); // true
console.log(hcs11052 === hcs11053); // false
console.log(hcs11052 === hcs11053); // false

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. conditional operators: if
// if, else if, else
const naming = 'hcs1105';

if(naming === 'hcs1105') {
  console.log(`Welcome, ${naming}!`); // Welcome, hcs1105!
} else if(naming === 'coder') {
  console.log('You\'re amazing developer');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// conditional? value1 : value2;
console.log(naming === 'hcs1105' ? 'hcs1105' : 'You\'re amazing developer'); // hcs1105

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';

switch(browser){
  case 'IE' : 
    console.log('go away!'); // go away!
    break;
  case 'Chrome' : 
  case 'Firefox' : 
    console.log('Good!');
    break;
  default : 
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy, body code is executed
let i = 3;
while(i > 0){
  console.log(`while: ${i}`); // while: 3, while: 2, while: 1
  i--;
}

// do while loop, body code is executed first, then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while(i > 0); // do while: 0

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
  console.log(`for: ${i}`); // for: 3, for: 2, for: 1
}

for(let i = 3; i > 0; i = i - 2){
  // inline variable declaration
  console.log(`inline variable for: ${i}`); // inline variable for: 3, inline variable for: 1
}

// nested loops
// 빅오 표기법(big-O notation) : n**2
// CPU 성능에 좋지 않음.
for(let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++){
    console.log(`i: ${i}, j: ${j}`); 
    // i: 0, j: 0, i: 0, j: 1, i: 0, j: 2, i: 1, j: 0, i: 1, j: 1, i: 1, j: 2, i: 2, j: 0, i: 2, j: 1, i: 2, j: 2,   
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for(let i = 0; i < 11; i++){
  if(i % 2 === 1) {
    continue;
  }
    console.log(`q1 : ${i}`); // q1 : 0, q1 : 2, q1 : 4, q1 : 6, q1 : 8, q1 : 10
}
// Q2. iterate from 0 to 10 and print numbers until reach 8(use break)
for(let i = 0; i < 11; i++){
  if(i > 8){
    break;
  }
  console.log(`q2 : ${i}`); // q2 : 0, q2 : 1, q2 : 2, q2 : 3, q2 : 4, q2 : 5, q2 : 6, q2 : 7, q2 : 8
}

/**
 * 12. short circult evalution
 * When using &&, if the left side is true, the right side value is returned.
 * When using &&, if the left side is false, the left value is returned.
 * When || is used, if the left side is true, the left side value is returned.
 * When || is used, if the left side is false, the right side value is returned.
 */
console.log(true && '아이브'); // 아이브
console.log(false && '아이브'); // false
console.log(true || '아이브'); // true
console.log(false || '아이브'); // 아이브
console.log(true && true && '아이브'); // 아이브
console.log(true && false && '아이브'); // false