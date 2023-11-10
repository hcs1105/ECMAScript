/**
 * This
 * 
 * 자바스크립트는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에서 평가된다.
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */

const global = this;
const testFunction = function() {
	return this;
};

console.log(testFunction()); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(global); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(testFunction() === global); // true

const yujin_1 = {
	name : '안유진',
	year : 2003,
	sayHello : function() {
		return `안녕하세요, 저는 ${this.name}입니다.`;
	},
};

console.log(yujin_1.sayHello()); // 안녕하세요, 저는 안유진입니다.

function Person_1(name, year) {
	this.name = name;
	this.year = year;
	this.sayHello = function() {
		return `안녕하세요, 저는 ${this.name}입니다.`;
	};
}

const yujin_2 = new Person_1('안유진', 2003);

console.log(yujin_2.sayHello()); // 안녕하세요, 저는 안유진입니다.

Person_1.prototype.dance_1 = function() {
	function dance_2() {
		return `${this.name}이 춤을 춥니다.`;
	}
	return dance_2();
};

console.log(yujin_2.dance_1()); // (undefined)이 춤을 춥니다.

/**
 * this 키워드가 어떤 것을 가리키는지를 알려면 3가지만 기억하면 된다.
 * 
 * 1) 읾반 함수를 호출할 때, this 키워드는 최상위 오브젝트(global 또는 window)를 가리킨다.
 * 2) 메소드를 호출할 때, this 키워드는 호출된 오브젝트를 가리킨다.
 * 3) new 연산자를 사용하여 오브젝트를 생성할 때, this 키워드는 생성된 오브젝트를 가리킨다.
 */

/**
 * 1) call() => 컴마를 기준으로 아규먼트를 순서대로 넘겨주다. 
 * 2) apply() => 컴마를 기준으로 아규먼트를 리스트로 입력한다.
 * 3) bind()
 */

function returnName() {
	return this.name;
}

console.log(returnName()); // undefined

const yujin_3 = {
	name : '안유진',
};

console.log(returnName.call(yujin_3)); // 안유진
console.log(returnName.apply(yujin_3)); // 안유진

function multiply(x, y, z) {
	return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yujin_3, 3, 4, 5)); // 안유진 / 결과값 : 60
console.log(multiply.apply(yujin_3, [3, 4, 5])); // 안유진 / 결과값 : 60

const laterFunction = multiply.bind(yujin_3, 3, 4, 5);

console.log(laterFunction); // ƒ multiply(x, y, z) { return `${this.name} / 결과값 : ${x * y * z}`;}
console.log(laterFunction()); // 안유진 / 결과값 : 60