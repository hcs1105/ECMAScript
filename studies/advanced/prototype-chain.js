/**
 * Prototype
 */

const testObj_1 = {};

/**
 * __proto__는 모든 오브젝트에 존재하는 프로퍼티이며 상속에서 부모 클래스에 해당한다.
 */
console.log(testObj_1.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

function IdolModel_1(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel_1.prototype); // {constructor: ƒ}
console.dir(IdolModel_1.prototype, {
	showHidden : true,
}); // Object

// circular reference
console.log(IdolModel_1.prototype.constructor === IdolModel_1); // true
console.log(IdolModel_1.prototype.constructor.prototype === IdolModel_1.prototype); // true

const yujin_1 = new IdolModel_1('안유진', 2003);
console.log(yujin_1.__proto__); // {constructor: ƒ}
console.log(yujin_1.__proto__ === IdolModel_1.prototype); // true

console.log(testObj_1.__proto__ === Object.prototype); // true

console.log(IdolModel_1.__proto__); // ƒ () { [native code] }
console.log(Function); // ƒ Function() { [native code] }
console.log(Function.prototype); // ƒ () { [native code] }
console.log(IdolModel_1.__proto__ === Function.prototype); // true

console.log(Function.prototype.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(Object.prototype); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel_1.prototype.__proto__ === Object.prototype); // true

console.log(yujin_1.toString()); // [object Object]
console.log(Object.prototype.toString()); // [object Object]

function IdolModel_2(name, year) {
	this.name = name;
	this.year = year;
	this.sayHello = function() {
		return `${this.name}이 인사합니다.`;
	};
}

const yujin_2 = new IdolModel_2('안유진', 2003);
const wonYoung_1 = new IdolModel_2('장원영', 2002);

console.log(yujin_2.sayHello()); // 안유진이 인사합니다.
console.log(wonYoung_1.sayHello()); // 장원영이 인사합니다.
console.log(yujin_2.sayHello === wonYoung_1.sayHello); // false
console.log(yujin_2.hasOwnProperty('sayHello')); // true
console.log(wonYoung_1.hasOwnProperty('sayHello')); // true

function IdolModel_3(name, year) {
	this.name = name;
	this.year = year;
}

IdolModel_3.prototype.sayHello = function() {
	return `${this.name}이 인사합니다.`;
};

const yujin_3 = new IdolModel_3('안유진', 2003);
const wonYoung_2 = new IdolModel_3('장원영', 2002);

console.log(yujin_3.sayHello()); // 안유진이 인사합니다.
console.log(wonYoung_2.sayHello()); // 장원영이 인사합니다.
console.log(yujin_3.sayHello === wonYoung_2.sayHello); // true
console.log(yujin_3.hasOwnProperty('sayHello')); // false
console.log(wonYoung_2.hasOwnProperty('sayHello')); // false

IdolModel_3.sayStaticHello = function() {
	return '안녕하세요, 저는 static method입니다.';
};

console.log(IdolModel_3.sayStaticHello()); // 안녕하세요, 저는 static method입니다.

/**
 * property shadowing <=> class overriding
 */
function IdolModel_4(name, year) {
	this.name = name;
	this.year = year;
	this.sayHello = function(){
		return '안녕하세요, 저는 인스턴스 메소드입니다.';
	};
}

IdolModel_4.prototype.sayHello = function() { 
	return '안녕하세요, 저는 prototype method입니다.';
};

const yujin_4 = new IdolModel_4('안유진', 2003);
console.log(yujin_4.sayHello()); // 안녕하세요, 저는 인스턴스 메소드입니다.