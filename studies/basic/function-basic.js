'use strict';

// 함수 선언
function doSomething(add) {
  console.log(add); // ƒ add(a, b) { const sum  = a + b; return sum;}
  const result = add(2, 3);
  console.log(result); // 5
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

/*
function doSomething() {
  console.log('Hello!');
}

function doParameter(add) {
  console.log(add);
}
*/

// 함수 호출
doSomething(add);

const addFun = add;
console.log(addFun); // ƒ add(a, b) { const sum  = a + b; return sum;}
console.log(addFun()); // NaN
console.log(addFun(6, 7)); // 13

/*
doSomething(); // Hello!
const result = add(1, 2);
console.log(result); // 3

doParameter(add); // ƒ add(a, b) { const sum  = a + b; return sum;}
doParameter(add()); // NaN
doParameter(); // undefined
doParameter(add(1,2)); // 3
*/