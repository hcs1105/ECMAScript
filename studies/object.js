'use strict';

// 참고 URL - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// Object
// one of the JavaScript's data types.
// A collection of related data and/or functionality.
// Nearly all objects in JavaScript area instances of Object.
// object = {key : value};

// 1. Literals and properties
// const obj1 = {}; // object literal syntax
// const obj2 = new Object(); // object constructor syntax	

const name = 'hcs1105';
const age = 20;

print1(name, age);

function print1(name, age) {
	console.log(name); // hcs1105
	console.log(age); // 20
}

function print2(person) {
	console.log(person.name); // hcs1105
	console.log(person.age); // 20
}

const hcs1105 = {
	name : 'hcs1105',
	age : 20
}

print2(hcs1105);

hcs1105.hasJob = true;
console.log(hcs1105.hasJob); // true

delete hcs1105.hasJob;
console.log(hcs1105.hasJob); // undefined