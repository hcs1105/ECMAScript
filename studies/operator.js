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