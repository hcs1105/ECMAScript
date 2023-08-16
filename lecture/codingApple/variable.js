// problem 1. 다음 코드의 콘솔창 출력 결과는 무엇일까요?
// solution(창수) : Cannot access 'hi' before initialization.

test1();

function test1() {
  console.log(hi);
  let hi = 'Hello!';
} 

// problem 2. 다음 코드의 콘솔창 출력 결과는 무엇일까요?
// solution(창수) : test2 is not a function.

test2();

var test2 = function() {
  console.log(hi);
  var hi = 'Hello!';
} 

// problem 3. 다음 코드의 콘솔창 출력 결과는 무엇일까요?
// solution(창수) : a = 1
let a = 1;
var test3 = function() {
  a = 2;
}
console.log(a);

// problem 4. 다음 코드의 콘솔창 출력 결과는 무엇일까요?
// solution(창수) : b = 1, c = 4, b + c = 5
let b = 1;
var c = 2;
window.b = 3;
window.c = 4;

console.log(b + c);

// problem 5. 콘솔창으로 1초에 1번씩 1부터 5까지 정수를 출력해 주세요.
/*
	setTimeout(function() { console.log(1); }, 1000 ); 
	setTimeout(function() { console.log(2); }, 2000 ); 
	setTimeout(function() { console.log(3); }, 3000 ); 
	setTimeout(function() { console.log(4); }, 4000 ); 
	setTimeout(function() { console.log(5); }, 5000 ); 
*/

// for문으로 표현하면
/*
for (var i = 1; i < 6; i++) { 
  setTimeout(function() { console.log(i); }, i*1000 ); 
}
*/
// 그런데 숫자 6이 1초마다 출력됩니다. 해당 버그를 수정해 주세요.

// solution(창수)
for (let i = 1; i < 6; i++) { 
  setTimeout(function() { console.log(i); }, i*1000 ); 
}