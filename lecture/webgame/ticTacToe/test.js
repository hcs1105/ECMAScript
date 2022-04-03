/* 
 * 객체의 속성과 그 속성을 담고 있는 변수의 이름이 같을 때 구조 분해 할당을 사용함.  
 * const obj = { a : 1, b : 2};  
 * const { a, b } = obj;  
 * const a = obj.a; // 다음 두 줄을 이렇게 한 줄로 표현이 가능함.   
 * const b = obj.b;   
 */

// 문제 1. 다음 객체에서 a, c, e 속성을 구조 분해 할당 문법으로 변수에 할당해 보세요.
const obj = {
  a : 'hello',
  b : {
    c : 'hi',
    d : { 
      e : 'wow' 
    }
  }
};

// solution
const { a, b : { c , d : { e } } } = obj; // 참고로 콜론으로 연결된 b와 d는 변수가 아닙니다.
const a = obj.a;
const c = obj.b.c;
const e = obj.b.d.e;

// 유제 1. 문제 1의 객체에서 a, b, e 속성을 구조 분해 할당 문법으로 변수에 할당해 보세요.
// solution
const { a, b } = obj;
const { d: { e } } = b;

/*
 * for 문을 이용하여 이차열 배열을 생성할 때 '줄 - 칸'의 순서로 만든다.
 */

// 문제 2. 5줄 4칸짜리 이차원 배열을 만들어 보세요. 배열의 요소는 모두 1입니다.
// solution
const array = [];

for (let i = 0; i < 5; i++) {
  const cells = [];
  for (let j = 0; j < 4; j++) {
    cells.push(1);
  }
  array.push(cells);
}

console.log(array); 
/*
 * [1, 1, 1, 1]
 * [1, 1, 1, 1]
 * [1, 1, 1, 1]
 * [1, 1, 1, 1]
 * [1, 1, 1, 1]
 */

// 문제 3. 다음 베열에서 한 칸이라도 null이 들어 있으면 true를 반환하고 아니면 false를 출력한 코드를 작성하세요.
const array = [1, 'hello', null, undefined, false];

// solution - 1
let some = false;

array.forEach((element) => {
  if (element === null) {
    some = true;
  }
});

console.log(some); // true

// solution - 2
const some = array.some(element => element === null);
console.log(some); // true
