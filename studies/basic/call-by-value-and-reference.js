/**
 * call by value | call by reference
 * 
 * 1) Basically, all primitive data types are call by value.
 * 2) The Object is call by reference.
 */

// call by value
const original = '안녕하세요!';
let clone = original;

console.log(original); // 안녕하세요!
console.log(clone); // 안녕하세요!
console.log(original === clone); // true

clone += ' 안유진입니다.';
console.log(original); // 안녕하세요!
console.log(clone); // 안녕하세요! 안유진입니다.
console.log(original === clone); // false

// call by reference
let originalObj = {
	name : '안유진',
	group : '아이브',
};
let cloneObj = originalObj;

console.log(originalObj); // {name: '안유진', group: '아이브'}
console.log(cloneObj); // {name: '안유진', group: '아이브'}
console.log(originalObj === cloneObj); // true

originalObj.group = 'hcs1105';
console.log(originalObj); // {name: '안유진', group: 'hcs1105'}
console.log(cloneObj); // {name: '안유진', group: 'hcs1105'}
console.log(originalObj === cloneObj); // true

originalObj = {
	name : '한창수',
	group : 'hcs1105',
};

cloneObj = {
	name : '한창수',
	group : 'hcs1105',
};

console.log(originalObj === cloneObj); // false

const yujin1 = {
	name : '안유진',
	group : '아이브',
};
const yujin2 = yujin1;
const yujin3 = {
	name : '안유진',
	group : '아이브',
};

console.log(yujin1 === yujin2); // true
console.log(yujin1 === yujin3); // false
console.log(yujin2 === yujin3); // false

/**
 * spread operator
 */
const yujin4 = {
	...yujin3,
};

console.log(yujin4); // {name: '안유진', group: '아이브'}
console.log(yujin3 === yujin4); // false

const yujin5 = {
	year : 2023,
	...yujin3,
};

console.log(yujin5); // {year: 2023, name: '안유진', group: '아이브'}

const yujin6 = {
	name : 'hcs1105',
	... yujin3,
};

console.log(yujin6); // {name: '안유진', group: '아이브'}

const yujin7 = {
	...yujin3,
	name : 'hcs1105',
};

console.log(yujin7); // {name: 'hcs1105', group: '아이브'}

const numbers = [1, 3, 5];
const numbersOther = [0, ...numbers, 7]; 

console.log(numbersOther); // [0, 1, 3, 5, 7]