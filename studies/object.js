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

// 2. Computed properties
// Key should be always string.
console.log(hcs1105.name); // hcs1105
console.log(hcs1105['name']); // hcs1105, 실시간으로 원하는 key의 값을 받아 올 때 사용.
hcs1105.hasJob = true;
console.log(hcs1105.hasJob); // true

function printValue1(obj, key) {
	console.log(obj.key);
}

printValue1(hcs1105, 'name'); // undefined

function printValue2(obj, key) {
	console.log(obj[key]);
}

printValue2(hcs1105, 'name'); // hcs1105
printValue2(hcs1105, 'age'); // 20

// 3. Property value shorthand
// 자바스크립트에서 key와 value의 이름이 동일하다면, value를 생략할 수 있다.
const person1 = {name : 'bob', age : 2}
const person2 = {name : 'steve', age : 3}
const person3 = {name : 'dave', age : 4}
const person4 = makePerson('hcs1105', 20);
console.log(person4); // {name: 'hcs1105', age: 20}

// 자바스크립트에 클래스가 없을 때 사용하던 방법
function makePerson(name, age) {
	return {
		name, // 같은 표현 - name : name
		age // 같은 표현 - age : age
	};
}

// 4. Constructor Function
const person5 = new Person('hcs1105', 20);
console.log(person5); // Person {name: 'hcs1105', age: 20}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 5. in operator : property existancde check(key in obj)
console.log('name' in hcs1105); // true
console.log('age' in hcs1105); // true
console.log('job' in hcs1105); // false
console.log(hcs1105.job); // undefined(정의하지 않는 키에 접근할 때)