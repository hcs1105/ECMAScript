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

/**
 * 1) 데이터 캐싱
 */
function cacheFunction_1() {
	var number = 10 * 10; // 해당 계산은 매우 오래 걸린디고 가정

	function innerCacheFunction_1(newNumber) {
		return number * newNumber;
	}

	return innerCacheFunction_1;
}

const runner_2 = cacheFunction_1();

console.log(runner_2(10)); // 1000
console.log(runner_2(20)); // 2000

function cacheFunction_2() {
	var number = 99;

	function increment_1() {
		number++;
	
		return number;
	}

	return increment_1;
}

const runner_3 = cacheFunction_2();

console.log(runner_3()); // 100
console.log(runner_3()); // 101

/**
 * 2) 정보 은닉
 */
function Idol_1(name, year) {
	var _year = year;
	this.name = name;
	this.sayNameAndYear = function() {
		return `안녕하세요, 저는 ${this.name}입니다. 그리고 ${_year}년도에 태어났습니다.`;
	};
}

const yujin_1 = new Idol_1('안유진', 2003);
console.log(yujin_1.sayNameAndYear()); // 안녕하세요, 저는 안유진입니다. 그리고 2003년도에 태어났습니다.
console.log(yujin_1.name); // 안유진
// console.log(_year); // Uncaught ReferenceError: _year is not defined.