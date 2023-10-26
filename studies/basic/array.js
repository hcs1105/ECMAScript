'use strict';

// Array
let iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']

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

// 5. Searching
// indexOf : find the index
console.log(fruits); // ['사과', '배', '수박', '복숭아', '레몬']
console.log(fruits.indexOf('사과')); // 0
console.log(fruits.indexOf('수박')); // 2
console.log(fruits.indexOf('코코낫')); // -1

// includes
console.log(fruits.includes('수박')); // true
console.log(fruits.includes('코코낫')); // false

// lastIndexOf
fruits.push('사과');
console.log(fruits); // ['사과', '배', '수박', '복숭아', '레몬', '사과']
console.log(fruits.indexOf('사과')); // 0
console.log(fruits.lastIndexOf('사과')); // 5

// push()
console.log(iveMembers.push('창수')); // 7
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서', '창수']

// pop()
console.log(iveMembers.pop()); // 창수
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']

// shift()
console.log(iveMembers.shift()); // 안유진
console.log(iveMembers); // ['가을', '레이', '장원영', '리즈', '이서']

// unshift()
console.log(iveMembers.unshift('안유진')); // 6
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']

// splice()
console.log(iveMembers.splice(0, 3)); // ['안유진', '가을', '레이']
console.log(iveMembers); // ['장원영', '리즈', '이서']

iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

// concat()
console.log(iveMembers.concat('창수')); // ['안유진', '가을', '레이', '장원영', '리즈', '이서', '창수']
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']

// slice()
console.log(iveMembers.slice(0, 3)); // ['안유진', '가을', '레이']
console.log(iveMembers); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']

// spread operator
const iveMembers_1 = [...iveMembers];
console.log(iveMembers_1); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']
console.log(iveMembers_1 === iveMembers); // false

const iveMembers_2 = [iveMembers];
console.log(iveMembers_2); // [['안유진', '가을', '레이', '장원영', '리즈', '이서']]

const iveMembers_3 = iveMembers;
console.log(iveMembers_3); // ['안유진', '가을', '레이', '장원영', '리즈', '이서']
console.log(iveMembers_3 === iveMembers); // true

// join()
console.log(iveMembers.join()); // 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/')); // 안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(', ')); // 안유진, 가을, 레이, 장원영, 리즈, 이서
console.log(iveMembers.join(' ')); // 안유진 가을 레이 장원영 리즈 이서
console.log(typeof iveMembers.join()); // string

/**
 * sort() : 오름차순
 * a와 b를 비교했을 때
 * 1) a를 b보다 나중에 정렬하려면(뒤애 두려면) 0보다 큰 숫자를 반환
 * 2) a를 b부다 먼저 정렬하려면(앞에 두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서대로 두려면 0을 반환
 */
console.log(iveMembers.sort()); // ['가을', '레이', '리즈', '안유진', '이서', '장원영']

let numbers = [1, 9, 7, 5, 3];
console.log(numbers); // [1, 9, 7, 5, 3]

numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers); // 오름차순 : [1, 3, 5, 7, 9]

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers); // [9, 7, 5, 3, 1]

// reverse() : 역순
console.log(iveMembers.reverse()); // ['장원영', '이서', '안유진', '리즈', '레이', '가을']

// map()
console.log(iveMembers.map(x => x)); // ['장원영', '이서', '안유진', '리즈', '레이', '가을']
console.log(iveMembers.map(x => `아이브: ${x}`)); // ['아이브: 장원영', '아이브: 이서', '아이브: 안유진', '아이브: 리즈', '아이브: 레이', '아이브: 가을']
console.log(iveMembers.map(x => {
  if(x === '안유진'){
    return `아이브: ${x}`;
  } else {
		return x;
	}
})); // ['장원영', '이서', '아이브: 안유진', '리즈', '레이', '가을']
console.log(iveMembers); // ['장원영', '이서', '안유진', '리즈', '레이', '가을']

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter(x => true)); // [1, 8, 7, 6, 3]
console.log(numbers.filter(x => false)); // []
console.log(numbers.filter(x => x % 2 === 0)); // [8, 6]
console.log(numbers); // [1, 8, 7, 6, 3]

// find()
console.log(numbers.find(x => true)); // 1
console.log(numbers.find(x => false)); // undefined
console.log(numbers.find(x => x % 2 === 0)); // 8
console.log(numbers); // [1, 8, 7, 6, 3]

// findIndex()
console.log(numbers.findIndex(x => x % 2 === 0)); // 1

// reduce()
console.log(numbers.reduce((prevValue, currentValue) => prevValue + currentValue)); // 25