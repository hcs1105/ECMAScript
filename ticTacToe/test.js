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

const { a, b : { c , d : { e } } } = obj; // 참고로 콜론으로 연결된 b와 d는 변수가 아닙니다.
const a = obj.a;
const c = obj.b.c;
const e = obj.b.d.e;

// 유제 1. 문제 1의 객체에서 a, b, e 속성을 구조 분해 할당 문법으로 변수에 할당해 보세요.
const { a, b } = obj;
const { d: { e } } = b;