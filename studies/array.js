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