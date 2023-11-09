/**
 * scope
 */

var numberOne = 20;

function levelOne() {
	console.log(numberOne);
}

function levelOne() {
	var numberOne = 40;

	console.log(numberOne);
}

// levelOne(); // 40
console.log(numberOne); // 20

function levelOne() {
	var numberOne = 40;

	function levelTwo() {
		var numberTwo = 99;

		console.log(`levelTwo numberTwo : ${numberTwo}`); // levelTwo numberTwo : 99
		console.log(`levelTwo numberOne : ${numberOne}`); // levelTwo numberOne : 40
	}
	levelTwo();
	console.log(`levelOne numberOne : ${numberOne}`); // levelOne numberOne : 40
}

levelOne();
console.log(numberOne); // 20
// console.log(numberTwo); // Uncaught ReferenceError: numberTwo is not defined.

/**
 * Lexical Scope : 함수가 선언된 위치에 의해 상위 스코프가 결정되는 것
 * Dynamic Scope : 함수가 실행된 위치에 의해 상위 스코프가 결정되는 것
 */
var numberThree = 3;

function lexicalScopeOne() {
	var numberThree = 100;
	lexicalScopeTwo();
}

function lexicalScopeTwo(){
	console.log(numberThree);
}

lexicalScopeOne(); // 3

/**
 * var 키워드 => 적용 범위 : 함수 레벨 스코프
 * const, let 키워드 => 적용 범위 : 블록 레벨 스코프 
 */

var i = 999;

for(var i = 0; i < 10; i++) {
	console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

console.log(`i in global scope : ${i}`); // i in global scope : 10

i = 999;

for(let i = 0; i < 10; i++) {
	console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

console.log(`i in global scope : ${i}`); // i in global scope : 999