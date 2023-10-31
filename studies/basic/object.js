'use strict';

// 참고 URL - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// Object
// one of the JavaScript's data types.
// A collection of related data and/or functionality.
// Nearly all objects in JavaScript area instances of Object.
// object = {key : value};
// If declared as const, the object itself cannot be changed, but the properties or methods inside the object can be changed.

// 1. Literals and properties
// const obj1 = {}; // object literal syntax
// const obj2 = new Object(); // object constructor syntax

const name = 'hcs1105';
const age = 20;
const yujin1 = {
	name : '안유진',
	group : '아이브',
	dance() {
		console.log(this); // {name: '안유진', group: '아이브', dance: ƒ}
		return `${this.name}이 춤을 춥니다.`;
	},
};
const key = 'name';
const nameKey = 'name';
const nameValue = '안유진';
const groupKey = 'group';
const groupValue = '아이브';

console.log(yujin1); // {name: '안유진', group: '아이브', dance: ƒ}
console.log(yujin1.name); // 안유진
console.log(yujin1['name']); // 안유진
console.log(yujin1[key]); // 안유진
console.log(yujin1.dance()); // 안유진이 춤을 춥니다.

const yujin2 = {
	[nameKey] : nameValue,
	[groupKey] : groupValue,
	dance() {
		console.log(this); // {name: '안유진', group: '아이브', dance: ƒ}
		return `${this.name}이 춤을 춥니다.`; // 안유진이 춤을 춥니다.
	},
};

console.log(yujin2); // {name: '안유진', group: '아이브', dance: ƒ}
console.log(yujin2.dance()); // 안유진이 춤을 춥니다.

yujin2.group = 'hcs1105'; 
console.log(yujin2); // {name: '안유진', group: 'hcs1105', dance: ƒ}

yujin2.englishName = 'An Yujin';
console.log(yujin2); // {name: '안유진', group: 'hcs1105', englishName: 'An Yujin', dance: ƒ}

delete yujin2.englishName;
console.log(yujin2); // {name: '안유진', group: 'hcs1105', dance: ƒ}

// Get all keys.
console.log(Object.keys(yujin2)); // ['name', 'group', 'dance']

// Get all values.
console.log(Object.values(yujin2)); // ['안유진', 'hcs1105', ƒ]

const yujin3 = {
	name,
};

console.log(yujin3); // {name: 'hcs1105'}

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

// 6. for ..in vs for ..of
// for (key in object)
for(const key in hcs1105) {
	console.log(key); // name, age, hasJob
}

// for (value of iterable) - 배열에 사용
const array = [1, 2, 3, 4];

for(let i = 0; i < array.length; i++){
	console.log(array[i]); // 1, 2, 3, 4
}

for(const value of array) {
	console.log(value); // 1, 2, 3, 4
}

// 7. Object Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name : 'hcs1105', age : 20};
const user2 = user; // user 변수 안에 ref를 user2 변수도 동일하게 할당받고 있음.

user2.name = 'Front-end Developer';
console.log(user); // {name: 'Front-end Developer', age: 20}
console.log(user2); // {name: 'Front-end Developer', age: 20}

// Old way
const user3 = {};

for(const key in user) {
	user3[key] = user[key];
}

// console.clear();
console.log(user3); // {name: 'Front-end Developer', age: 20}

// assign() 메소드를 활용한 방법
const user4 = {};

Object.assign(user4, user);
console.log(user4); // {name: 'Front-end Developer', age: 20}

const user5 = Object.assign({}, user);
console.log(user5); // {name: 'Front-end Developer', age: 20}

// assign() 메소드를 활용한 다른 예시
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixedFruit = Object.assign({}, fruit1, fruit2);

console.log(mixedFruit.color); // blue
console.log(mixedFruit.size); // big

// spread 연산자를 활용한 방법
const user6 = {...user};

console.log(user6);

/**
 * Object
 */
