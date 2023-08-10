/*
 * 자바스크립트로 클래스를 추가/수정/삭제하는 방법
 * 태그.classList.add('클래스'); // 추가
 * 태그.classList.replace('기존 클래스', '수정 클래스'); // 수정
 * 태그.classList.remove('클래스'); // 삭제
 */

// 문제 1. 다음 태그의 클래스는 어떻게 될까요?
태그.classList.add('hello', 'hi', 'hello', 'bye'); // 'hello', 'hi', 'bye'
태그.classList.replace('bye', 'seeyou'); // 'hello', 'hi', 'seeyou'
태그.classList.remove('bye'); // 'hello', 'hi', 'seeyou'

/*
 * new Date(); // Wed May 26 2021 01:56:24 GMT+0900 (대한민국 표준시)
 * new Date().getFullYear(); // 2021
 * new Date().getMonth(); // 4
 * new Date().getDate(); // 26
 * new Date().getHours(); // 2
 * new Date().getMinutes(); // 3
 * new Date().getSeconds(); // 10
 * new Date().getMilliseconds(); // 865
 * new Date().setDate(23); // 1621703198436
 * new Date().toLocaleString(); // "2021. 5. 26. 오전 2:08:22"
 */

// 문제 2. 2021년 2월 21일과 2021년 3월 3일은 며칠 차이가 날끼요?
/*
 * new Date(2021, 2, 3) - new Date(2021, 1, 21) // 864000000ms
 * (new Date(2021, 2, 3) - new Date(2021, 1, 21)) / 1000 // 864000s
 * (new Date(2021, 2, 3) - new Date(2021, 1, 21)) / 1000 / 60 // 14400m
 * (new Date(2021, 2, 3) - new Date(2021, 1, 21)) / 1000 / 60 / 60 // 240h
 * (new Date(2021, 2, 3) - new Date(2021, 1, 21)) / 1000 / 60 / 60 / 24 // 10days
 */
const differDays = new Date(2021, 2, 3) - new Date(2021, 1, 21);
console.log(differDays / 1000 / 60 / 60 / 24); // 10

/* 
 * reduce() 메소드의 사용 방법
 * 배열.reduce((누적값, 현재값) => {
 *  return 새로운 누적값;
 * }, 초기값);
 * 함수에서 반환돠는 값은 다음 번에 누적값이 되고 마지막으로 반환되는 값은 reduce 메소드의 결과값임.
 * 초기값이 없으면 배열의 첫 번째 요소가 초기값임.
 * reduce() 메소드는 배열과 알고리즘에서 많이 쓰임.
 * reduce() 메소드를 이용하여 배열을 객체 리터럴로 바꿀 수 있다.
 * reduce() 메소드를 이용하여 forEach() 문과 map() 메소드, find() 메소드, findIndex() 메소드, include() 메소드, indexOf() 메소드 등을 구현할 수 있다.
 * 참고로 함수형 프로그래밍에서 map() 메소드와 reduce() 메소드가 제일 중요함.
 */

/* 
  [1, 2, 3, 4].reduce((a, b) => {
    return a + b;
  }); 
*/
[1, 2, 3, 4].reduce((a, b) => (a + b), 0); // a: 초기 누적값, b: 현재값, a + b: 다음 누적값, 0: 초기값 
// a = 0, b = 1
// a = 1, b = 2 
// a = 3, b = 3 
// a = 6, b = 4
// 10 

[1, 2, 3, 4].reduce((a, b) => (a + b)); // a: 초기 누적값, b: 현재값, a + b: 다음 누적값, 1: 초기값이 없으므로 배열의 첫 번째 원소 값이 초기값임. 
// a = 1, b = 2
// a = 3, b = 3 
// a = 6, b = 4
// 10

[1, 2, 3, 4].reduce((a, b) => (a * b), 1); // a: 초기 누적값, b: 현재값, a + b: 다음 누적값, 1: 초기값 
// a = 1, b = 1
// a = 1, b = 2
// a = 2, b = 3 
// a = 6, b = 4
// 24

[1, 2, 3, 4].reduce((a, b) => (a + b), 0) / [1, 2, 3, 4].length; // 2.5

[1, 2, 3, 4].reduce((a, b) => (a * b), 1) / [1, 2, 3, 4].length; // 6

['창수', '영희', '철수', '정희'].reduce((a, b, i) => { // i : 인덱스
  a[i] = b; 
  return a;
  }, {}); // {0: "창수", 1: "영희", 2: "철수", 3: "정희"}

// a : {}, b : '창수', i : 0
// a : {0 : '창수'}, b : '영희', i : 1
// a : {0 : '창수', 1 : '영희'}, b: '철수', i : 2
// a : {0 : '창수', 1 : '영희', 2 : '철수'}, b: '정희', i : 3
// a : {0 : '창수', 1 : '영희', 2 : '철수', 3 : '정희'}

// 문제 3. 다음 코드의 결과값을 예상해 보세요.
[1, 2, 3, 4, 5].reduce((a, c) => {
  a[c] = c * 10;
  return a; 
}, {}); // {1: 10, 2: 20, 3: 30, 4: 40, 5: 50}

// 문제 3을 응용할 경우
[1, 2, 3, 4, 5].reduce((a, c, i) => {
  a[i] = c * 10;
  return a; 
}, {}); // {0: 10, 1: 20, 2: 30, 3: 40, 4: 50}

[1, 2, 3, 4, 5].reduce((a, c, i) => {
  a[i] = i * 10;
  return a; 
}, {}); // {0: 0, 1: 10, 2: 20, 3: 30, 4: 40}