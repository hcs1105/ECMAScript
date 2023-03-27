'use strict';

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