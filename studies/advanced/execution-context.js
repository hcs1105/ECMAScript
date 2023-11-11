/**
 * Execution Context : 실행하려는 JS 코드와 코드를 실행하는데 필요한 정보를 담고 있는 특수한 환경, 즉, JS 코드 실행에 필요한 모든 데이터를 들고 있는 환경
 * 
 * Execution Context는 크게 두 가지로 구분된다.
 * 1) Global Context : 최상위 Execution Context이다. 이것은 코드를 실행하면 무조건 생성되는 context로 웹에서는 window 오브젝트, nodeJS에서는 global 오브젝트를 의미한다.
 * 2) Function Context : 함수가 실행될 때마다 함수별로 실행되는 Context이다. 그래서 함수 실행에 대한 모든 정보를 담고 있다.
 */

function one() {
  console.log('run one');
  console.log('run one finished');
}

function two() {
	console.log('run two');
	one();
  console.log('run two finished');
}

function three() {
	console.log('run three');
	two();
  console.log('run three finished');
}

three();

/**
 * Execution Context를 실행한 후에 다음과 같은 일들이 발생한다.
 * 1) Create Phase
 * Global Object를 생성한다. 즉, window 또는 global 오브젝트가 생성되고 함수에서는 arguments 오브젝트가 생성된다.
 * this 키워드는 window 또는 global 오브젝트에 바인딩한다.
 * 변수와 함수를 Memory Heap에 배정하고 기본값을 undefined로 저장한다.
 * 2) Execution Phase
 * 코드를 실행한다.
 * 필요하다면 새로운 Execution Context를 생성한다.
 */

var number_1 = 20;
var number_2 = 30;

function multiply(x, y) {
	var result_1 = x * y;
	return result_1;
}

var result_2 = multiply(number_1, number_2);
var result_3 = multiply(100, 200);