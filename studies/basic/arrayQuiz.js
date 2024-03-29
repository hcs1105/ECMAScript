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

// 6. make an array of enrolled students.
{
  const result = students.filter((student) => student.enrolled);

  console.log(result); // [Student, Student, Student]
  // Student {name: 'A', age: 29, enrolled: true, score: 45}
  // Student {name: 'C', age: 30, enrolled: true, score: 90}
  // Student {name: 'E', age: 18, enrolled: true, score: 88}
}

// 7. make an array containing only the student's score
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);

  console.log(result); // [45, 80, 90, 66, 88]
}

// 8. check if there is a student with the score lower than 50.
{
  const result = students.some(student => student.score < 50);

  console.log(result); // true
}

// 9. compute student's average score.
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  const averageResult = result / students.length;

  console.log(averageResult); // 73.8

  /* 같은 표현
  const result = students.reduce((prev, curr) => {
    console.log('-------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  const averageResult = result / students.length;

  console.log(averageResult); // 73.8
  */
}

// 10. make a string containing all the scores.
// result should be : '45, 80, 90, 66, 88'
{
  const result = students
    .map(student => student.score)
    .join();

  console.log(result); // 45,80,90,66,88

  /* 
   * 만약 학생들의 점수가 50점 이상인 경우의 점수들을 나열한다면
  const result = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .join();

  console.log(result); // 80,90,66,88
  
  // 참고 사항
  const result1 = students.map(student => student.score);
  const result2 = result1.filter(score => score >=50)
  const result3 = result2.join();


  console.log(result1); // [45, 80, 90, 66, 88]
  console.log(result2); // [80, 90, 66, 88]
  console.log(result3); // 80,90,66,88
  */
}

// 11. do Q10 sorted in ascending order.
// result should be : '45, 66, 80, 88, 90'
{
  const result = students
    .map(student => student.score)
    .sort((a, b) => a - b);
  
  console.log(result); // [45, 66, 80, 88, 90]

  /* 
   * 만약 학생들의 점수를 내림차순(descending order)으로 나열한다면
  const result = students
  .map(student => student.score)
  .sort((a, b) => b - a);

  console.log(result); // [90, 88, 80, 66, 45]
   */
}