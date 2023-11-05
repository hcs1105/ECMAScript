/**
 * Immutable Object
 */

const yujin_1 = {
  name : '안유진',
  year : 2003,
  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
};

console.log(yujin_1); // {name: '안유진', year: 2003, age: [Getter/Setter]}

// Extensible
console.log(Object.isExtensible(yujin_1)); // true
yujin_1.position = 'vocal';
console.log(yujin_1); // {name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal'}

Object.preventExtensions(yujin_1);
console.log(Object.isExtensible(yujin_1)); // false

yujin_1.groupName = '아이브';
console.log(yujin_1); // {name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal'}

delete yujin_1.position;
console.log(yujin_1); // {name: '안유진', year: 2003, age: [Getter/Setter]}

// Seal <=> configurable : false
const yujin_2 = {
  name : '안유진',
  year : 2003,
  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
};

console.log(yujin_2); // {name: '안유진', year: 2003, age: [Getter/Setter]}
console.log(Object.isSealed(yujin_2)); // false

Object.seal(yujin_2);
console.log(Object.isSealed(yujin_2)); // true

yujin_2.groupName = '아이브';
console.log(yujin_2); // {name: '안유진', year: 2003, age: [Getter/Setter]}

delete yujin_2.name;
console.log(yujin_2); // {name: '안유진', year: 2003, age: [Getter/Setter]}

Object.defineProperty(yujin_2, 'name', {
	value : 'hcs1105',
	writable : false,
});
console.log(Object.getOwnPropertyDescriptor(yujin_2, 'name')); // {value: 'hcs1105', writable: false, enumerable: true, configurable: false}

// freeze -> 읽기 외에 모든 기능을 불가능하게 만든다.
const yujin_3 = {
  name : '안유진',
  year : 2003,
  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  }
};

console.log(Object.isFrozen(yujin_3)); // false

Object.freeze(yujin_3);
console.log(Object.isFrozen(yujin_3)); // true

yujin_3.groupName = '아이브';
console.log(yujin_3); // {name: '안유진', year: 2003, age: [Getter/Setter]}

delete yujin_3.name;
console.log(yujin_3); // {name: '안유진', year: 2003, age: [Getter/Setter]}

// Object.defineProperty(yujin_3, 'name', {
// 	value : 'hcs1105',
// }); // Uncaught TypeError: Cannot redefine property: name

console.log(Object.getOwnPropertyDescriptor(yujin_3, 'name')); // {value: '안유진', writable: false, enumerable: true, configurable: false}

const yujin_4 = {
	name : '안유진',
	year : 2003,
	wonYoung : {
		name : '장원영',
		year : 2002,
	},
};

Object.freeze(yujin_4);
console.log(Object.isFrozen(yujin_4)); // true
console.log(Object.isFrozen(yujin_4.wonYoung)); // false
