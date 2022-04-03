/*
 * 변수는 기본적으로 스코프(scope, 범위 : 변수에 접근 가능한 범위)를 가짐.
 * var는 함수 스코프, let은 블록 스코프
 */

function a() {
  var b = 1;
}
/*
 * b는 함수 안에 선언된 변수이므로 함수 밖에서 접근할 수 없음.
 * 함수 스코프 : 함수를 경계로 접근 여부가 달라지는 것
 */
console.log(b); // Uncaught ReferenceError: b is not defined.

/* 
 * var는 함수 스코프(함수만 신경 씀)를 갖는데 if문은 블록 스코프이므로 변수 a에 접근이 됨.
 */
if(true) {
  var a = 1;
}

console.log(a); // 1

/*
 * let은 블록 스코프(블록을 신경 씀)인데 블록 바깥에서 블록에 접근할 수 없으므로 에러가 발생함.
 * 블록은 if 문, for 문, while 문에서 볼 수 있는 {}를 의미함.
 * const도 블록 스코프임.
 */
if(true) {
  let c = 1;
}

console.log(c); // Uncaught ReferenceError: c is not defined.

/*
 * 반복문의 경우 i가 false일 때까지 동작함. 그래서 false일 때 i 값이 표시됨. 
 */
for(var i = 0; i < 5; i++) {}

console.log(i); // i = 5

/*
 * let과 for 문이 블록 스코프인데 블록 바깥에서 블록에 접근할 수 없으므로 에러가 발생함.
 */
for(let i = 0; i < 5; i++) {}

console.log(i); // Uncaught ReferenceError: i is not defined