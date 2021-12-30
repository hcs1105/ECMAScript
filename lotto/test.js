// Git 기본 브랜치 변경 테스트 : master -> main

// setTimeout() 함수를 이용히여 3.5초 이후에 처리하도록 구현하는 문제
function func() {
  console.log('Hellow');
}

// solution - 1
// 참고로 내부 함수가 하나이고 인수가 없는 경우에는 2번째 풀이처럼 코드를 간소화할 수 있음.
setTimeout(() => {
  func();
}, 3500);

// solution - 2
setTimeout(func, 3500);