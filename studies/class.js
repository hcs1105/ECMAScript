/*
class person {
  name; // 속성(field)
  age; // 속성(field)
  speak(); // 행동(method)
}
*/

/** 
 * class
 * - template
 * - declare once
 * - no data in
 */

/** 
 * object
 * - instance of a class
 * - created many times
 * - data in
 */

'use strict';
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript class
// - introduced in ES6
// - syntactial sugar over prototype-based inheritance

// 1. class declarations
class Person {
  // constructor
  constructor(name, age){ // 오브젝트를 만들 때 필요한 데이터 전달
    // fields
    this.name = name;
    this.age = age;
  } 
  // methods
  speak() {
    console.log(`${this.name}: hello!`); // this : 생성된 오브젝트(생성자 함수에 의해 만들어진 오브젝트)
  }
}

const hcs1105 = new Person('hcs1105', 20);

console.log(hcs1105.name); // hcs1105
console.log(hcs1105.age); // 20
hcs1105.speak(); // hcs1105: hello!

// 2. Getter & Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // age() 함수라는 getter를 정의하는 순간 this.age는 메모리에 올라가 있는 데이터를 읽어 오는 것이 아니라 getter를 호출함.
  get age() {
    return this._age;
  }

  // age(value) 함수라는 setter를 정의하는 순간 age는 메모리에 있는 데이터를 할당하는 것이 아니라 setter를 호출함.
  set age(value) {
    /* 공격적인 방법
    if(value < 0) {
      throw Error('age can\'t be negative');
    }
    this._age = value;
    */
   // 젠틀한 방법
   this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Jobs', -1);

console.log(user1.age); // 0