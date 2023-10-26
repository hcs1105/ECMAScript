'use strict';

const add = (a, b) => a + b;

function calculator(func, a, b) {
  return func(a, b);
}

// 함수를 호출할 때 함수의 리턴값을 생각하라.
add(3,5); // 8
calculator(add, 3, 5); // 8

// 고차함수 : 함수가 다른 함수를 리턴하는 함수
const onClick = () => (event) => {
  console.log('hello!');
};

document.querySelector('#header').addEventListener('click', onClick());

const test1 = x => y => z => `x: ${x}, y: ${y}, z: ${z}`;
console.log(test1(1)(2)(3));

function test2(x) {
  return function(y) {
    return function(z) {
			return `x: ${x}, y: ${y}, z: ${z}`;
		};
  };
}

console.log(test2(1)(2)(3));