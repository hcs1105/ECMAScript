/**
 * 자바스크립트는 싱글 스레드(single thread) 언어이다. 그래서 자바스크립트는 한 번에 하나의 작업만 실행한다.
 *
 * Async Thoery
 */

// Sync Programming
function syncWork() {
  const now = new Date();
  /**
   * milliseconds since epoch
   * 1970년 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환한다.
   */
  const milliseconds = now.getTime();
  const afterTwoSeconds = milliseconds + 2 * 1000; 

  while(new Date().getTime() < afterTwoSeconds) {

  }
  console.log('완료');
}

// console.log('Hello');
// syncWork();
// console.log('world');

// Async Programming
function asyncWork() {
  setTimeout(() => {
		console.log('완료');
	}, 2000);
}

console.log('Hello');
asyncWork();
console.log('world');