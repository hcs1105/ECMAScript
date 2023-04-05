'use strict';

// 호출 스택 : LIFO(Last In Frist Out)
// 스코프 체인 : 특정 함수에서 어떤 변수에 접근할 수 있는지 알려 주는 것
function c() {
  const y = 'y';
  console.log('c');
}

function a() {
  const x = 'x';
  console.log('a');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
  b();
}

a(); // a -> b -> c
c(); // c