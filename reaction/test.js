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

// 문재 2. 2021년 2월 21일과 2021년 3월 3일은 며칠 차이가 날끼요?
/*
 * new Date(2021, 2, 3) - new Date(2021, 1, 21) // 864000000ms
 * (new Date(2021, 2, 3) - new Date(2021, 1, 21)) / 1000 // 864000s
 * (new Date(2021, 2, 3) - new Date(2021, 1, 21)) / 1000 / 60 // 14400m
 * (new Date(2021, 2, 3) - new Date(2021, 1, 21)) / 1000 / 60 / 60 // 240h
 * (new Date(2021, 2, 3) - new Date(2021, 1, 21)) / 1000 / 60 / 60 / 24 // 10days
 */
const differDays = new Date(2021, 2, 3) - new Date(2021, 1, 21);
console.log(differDays / 1000 / 60 / 60 / 24); // 10
