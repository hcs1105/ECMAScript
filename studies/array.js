'use strict';

// Array

// 1. Declaration
const arr1 = new Array(1, 2);
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];

console.log(fruits); // ['사과', '바나나']
console.log(fruits.length); // 2
console.log(fruits[0]); // 사과, 배열의 첫 번째 원소에 접근할 때 사용
console.log(fruits[1]); // 바나나
console.log(fruits[3]); // undefined
console.log(fruits[fruits.length - 1]); // 바나나

// 3. Looping over an array
// print all fruits

// a. for loop
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // 사과, 바나나
}

// b. for of
for(const fruit of fruits) {
  console.log(fruit); // 사과, 바나나
}

// c. forEach -> 콜백 함수를 받아옴.
// forEach 함수의 경우, 보통 배열을 쓰지 않음.
fruits.forEach(function(fruit) {
  console.log(fruit); // 사과, 바나나
});

// 화살표 함수를 사용하는 방법
fruits.forEach((fruit) => {
  console.log(fruit); // 사과, 바나나
});

// 화살표 함수를 간단히 사용하는 방법
fruits.forEach(fruit => console.log(fruit)); // 사과, 바나나

// 4. Addition, Deletion
// push : add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits); // ['사과', '바나나', '딸기', '복숭아']

// pop : remove an item from the end
fruits.pop();
console.log(fruits); // ['사과', '바나나', '딸기']
fruits.pop();
console.log(fruits); // ['사과', '바나나']

// unshift : add an item to the beginning
fruits.unshift('딸기', '레몬');
console.log(fruits); // ['딸기', '레몬', '사과', '바나나']

// shift : remove an item from the beginning
fruits.shift();
console.log(fruits); // ['레몬', '사과', '바나나']
fruits.shift();
console.log(fruits); // ['사과', '바나나']

// note!! shift and unshift are slower than push and pop.

// splice : remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits); // ['사과', '바나나', '딸기', '복숭아', '레몬']
/*
fruits.splice(1);
console.log(fruits); // ['사과']
*/
fruits.splice(1, 1);
console.log(fruits); // ['사과', '딸기', '복숭아', '레몬']
fruits.splice(1, 1, '배', '수박');
console.log(fruits); // ['사과', '배', '수박', '복숭아', '레몬']

// combine two arrays
const fruit2 = ['포도', '자두'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits); // ['사과', '배', '수박', '복숭아', '레몬', '포도', '자두']