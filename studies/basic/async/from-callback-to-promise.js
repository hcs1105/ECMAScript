'use strict';

// callback hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(id === 'hcs1105' && password === '1111' || id === 'fedev1105' && password === '2222') {
          resolve(id);
        } else {
          reject(new Error('Not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(user === 'hcs1105') {
          resolve({ name : 'hcs1105', role : 'admin'});
        } else {
          reject(new Error('Not access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id.');
const password = prompt('Enter your password.');

userStorage.loginUser(id, password)
  .then(user => userStorage.getRoles(user))
  .then(user => console.log(`Hello! ${user.name}, you have a ${user.role} role.`))
  .catch(error => console.log(error));