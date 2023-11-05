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