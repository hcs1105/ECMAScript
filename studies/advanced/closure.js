/**
 * Closure : The combination of a function and the lexical environment within which that function was declared.
 * 클로저 : 함수와 함수가 선언된 렉시컬 환경의 조합
 * 의역하면, 상위 함수보다 히위 함수가 더 오래 살아 있는 경우를 클로저라고 한다.
 */
function getNumber_1() {
	var number = 5;

	function innerGetNumber_1() {
		return number;
	}

	return innerGetNumber_1();
}

// console.log(number); // Uncaught ReferenceError: number is not defined.
console.log(getNumber_1()); // 5

function getNumber_2() {
	var number = 10;

	function innerGetNumber_2() {
		return number;
	}

	return innerGetNumber_2;
}

const runner_1 = getNumber_2();
// console.log(runner_1); // ƒ innerGetNumber_2() { return number; }
console.log(runner_1()); // 10