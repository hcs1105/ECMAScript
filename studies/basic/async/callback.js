'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.

console.log(1); // 1
console.log(2); // 2
console.log(3); // 3

// Asynchronous
// 콘솔 메소드에 찍힌 순서 : 1 -> 3 -> 2
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

// Synchronous callback 
function printImmediately(print) {
  console.log(print); // () => console.log('hello')
  print(); // hello
}

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, time) {
  setTimeout(print, time);
}

printWithDelay(() => console.log('Asynchronous callback!'), 2000); // Asynchronous callback!

// callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(id === 'hcs1105' && password === '1111' || id === 'fedev1105' && password === '2222') {
        onSuccess(id);
      } else {
        onError(new Error('Not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if(user === 'hcs1105') {
        onSuccess({ name : 'hcs1105', role : 'admin'});
      } else {
        onError(new Error('Not access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id.');
const password = prompt('Enter your password.');

userStorage.loginUser(
  id, 
  password, 
  user => {
    userStorage.getRoles(
      user, 
      userWithRole => {
        console.log(`Hello! ${userWithRole.name}, you have a ${userWithRole.role} role.`);
      }, 
      error => {
        console.log(error);
      }
    );
  }, 
  error => {
    console.log(error);
  } 
);

/**
 * 콞백 지옥의 문제점
 * 1. 가독성이 떨어짐.
 * 2. 에러를 확인하거나 디버깅이 어렵다.
 * 3. 유지 보수가 곤란하다.
 */