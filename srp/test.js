// setInterval 함수로 구현한 효과를 setTimeout 함수로 바꾸는 문제
setInterval(() => {
  console.log('hello');
}, 1000);

// solution
function hello() {
  console.log('hello');
  setTimeout(hello, 1000);
}

setTimeout(hello, 1000);

/* 
 * 참고 사항
 * setInterval 함수는 간격 보장을 유지하려고 노력함.
 * setTimeout 함수는 실행하는 명령문이 많을 경우 그것을 모두 구현한 후에 간격을 보장함. 
 * 그래서 setTimeout 함수는 상대적으로 setInterval 함수에 비해 간격 보장에 소홀함.  
 */

// 다음 이벤트 리스너를 removeEventListener 메소드로 제거하는 문제
const fun = (값) => () => {
  console.log('고차함수입니다.', 값)
}

태그.addEventListener('click', fun(1));

// solution
const fun = (값) => () => {
  console.log('고차함수입니다.', 값)
}

const fun1 = fun(1);

태그.addEventListener('click', fun1);
태그.removeEventListener('click', fun1);

/*
 * 참고 사항
 * 고차 함수는 항상 새로운 함수를 반환하고 같은 함수가 아니므로 이벤트가 제거되지 않음.
 */
