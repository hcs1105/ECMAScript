'use strict';

// 1. make a string out of an array.
{
  const fruits = ['apple', 'banner', 'orange'];
  const result = fruits.join();

  console.log(result); // apple,banner,orange
}

// 2. make an array out of a string.
{
  const fruits = 'apple,banner,orange';
  const result = fruits.split(',');
  
  console.log(result); // ['apple', 'banner', 'orange']
}

// 3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  
  console.log(result); // [5, 4, 3, 2, 1]
  console.log(array);  // [5, 4, 3, 2, 1]
}

// 4. make new array without the first and two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // slice() 메소드는 원본 배열이 수정되지 않음.

  console.log(result); // [3, 4, 5]
  console.log(array) // [1, 2, 3, 4, 5]

  /* 오답 유형
  const result = array.splice(2); // splice() 메소드는 원본 배열이 수정됨.

  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2]
  */
}