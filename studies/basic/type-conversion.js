/**
 * Type Conversion
 * 
 * 1) explicit
 * 2) implicit
 */

let age = 46;

// explicit
let stringAge = age.toString();
console.log(typeof stringAge, stringAge); // string 46

console.log(typeof (99).toString(), (99).toString()); // string 99
console.log(typeof true.toString(), true.toString()); // string true
console.log(typeof Infinity.toString(), Infinity.toString()); // string Infinity

// implicit
let test = age + '';
console.log(typeof test, test); // string 46

console.log('98' + 2); // 982
console.log('98' * 2); // 196
console.log('98' - 2); // 96

// Convert to numeric type
console.log(typeof parseInt('0'), parseInt('0.90')); // number 0
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // number 0.99
console.log(typeof +'1', +'1'); // number 1

/**
 * Convert to boolean type
 */
console.log(!'x'); // false
console.log(!!'x'); // true
console.log(!!''); // false
console.log(!!0); // false
console.log(!!'0'); // true
console.log(!!'false'); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!{}); // true
console.log(!![]); // true