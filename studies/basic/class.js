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

class IdolModel {
	name;
	year;

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	sayName() {
		return `안녕하세요, 저는 ${this.name}입니다.`;
	}
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin); // IdolModel {name: '안유진', year: 2003}

const gaeul = new IdolModel('가을', 2002);
console.log(gaeul); // IdolModel {name: '가을', year: 2002}

const ray = new IdolModel('레이', 2004);
console.log(ray); // IdolModel {name: '레이', year: 2004}

const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung); // IdolModel {name: '장원영', year: 2004}

const liz = new IdolModel('리즈', 2004);
console.log(liz); // IdolModel {name: '리즈', year: 2004}

const eseo = new IdolModel('이서', 2007);
console.log(eseo); // IdolModel {name: '이서', year: 2007}

console.log(yujin.name); // 안유진
console.log(yujin.year); // 2003
console.log(yujin.sayName()); // 안녕하세요, 저는 안유진입니다.
console.log(wonYoung.sayName()); // 안녕하세요, 저는 장원영입니다.
console.log(typeof IdolModel); // function
console.log(typeof yujin); // object

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

// 3. Fields (public, private)
// Too soon!
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// object와 상관없이 공통적으로 클래스에 쓸 수 있는 거라면 Static properties and methods를 이용하여 메모리의 효율을 조금이라도 줄일 수 있다.
// TypeScript에서 유용하게 사용할 수 있다.
// Too soon!
class Article {
  static fedev = 'Frontend Developer';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printFedev() {
    console.log(Article.fedev);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.fedev); // undefined
console.log(Article.fedev); // Frontend Developer
Article.printFedev(); // Frontend Developer

// 5. Inheritance
// A way for one class to extend another class.
class Shape {
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `Triangle color : ${this.color}`;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() { // override
    super.draw(); // drawing blue color!
    console.log('▲'); // ▲
  }

  getArea() { // override
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color!
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color!
console.log(triangle.getArea()); // 

// 6. Class checking : instanceof
// instanceof 연산자 : 오브젝트가 특정 클래스에 속한는지 여부를 확인하는 연산자
// 참고 URL : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString()); // Triangle color : red