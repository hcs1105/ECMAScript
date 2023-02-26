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
  const result1 = array.slice(2, 5); // slice() 메소드는 원본 배열이 수정되지 않음.
  const result2 = array.slice(2);

  console.log(result1); // [3, 4, 5]
  console.log(result2); // [3, 4, 5]
  console.log(array) // [1, 2, 3, 4, 5]

  /* 오답 유형
  const result = array.splice(0, 2); // splice() 메소드는 원본 배열이 수정됨.

  console.log(result); // [1, 2]
  console.log(array); // [3, 4, 5]
  */
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88)
]

// 5. find a student with the score 90.
{
  const result = students.find((student) => student.score === 90);
  console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}

  /* 같은 표현 : 함수 선언문 형식
  const result = students.find(function(student, index){
    // console.log(student, index);
    return student.score === 90;
  });
  console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}
  */
}