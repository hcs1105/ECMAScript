'use strict';

// Promise is a javaScript object foe asynchronous operation.
// state : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  // When new Promise is created, the executor runs automatically.
  console.log('doing something...');
  setTimeout(() => {
    resolve('hcs1105');
    // reject(new Error('No network!'));
  }, 2000);
});

// 2. Consumer : then, catch, finally
promise
  .then(value => {
    console.log(value); // hcs1105
  })
  .catch(error => {
    console.log(error); // Error: No network!
  })
  .finally(() => {
    console.log('finally'); // finally
  });

  // 3. Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(num - 1);
        }, 1000);
      });
    })
    .then(num => console.log(num)); // 5

    // 4. Error handing
    const getHen = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('hen');
        }, 1000);
      });
    };

    const getEgg = hen => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // resolve(`${hen} => 달걀`);
          reject(new Error(`Error! ${hen} => 달걀`));
        }, 1000);
      });
    };

    const fri = egg => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`${egg} => 후라이`);
        }, 1000);
      });
    };

    getHen()
      .then(hen => getEgg(hen))
      .catch(error => {
        return '떡볶이';
      })
      .then(egg => fri(egg))
      .then(meal => console.log(meal)) // 떡볶이 => 후라이
      .catch(error => console.log(error)); // Error: Error! hen => 달걀
   
    /*
     * 파라미터와 인자가 같으면 다음과 같이 표현할 수 있음.
      getHen()
        .then(getEgg)
        .then(fri)
        .then(console.log) // hen => 달걀 => 후라이
        .catch(console.log);
     */
