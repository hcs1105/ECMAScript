'use strict';

// async & await
// clear style of using promise

// 1. Promise
function promiseUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 seconds
    resolve('hcs1105'); 
  });
}

const user1 = promiseUser();
user1.then(userName => console.log(userName)); // hcs1105
console.log(user1); // Promise {<fulfilled>: 'hcs1105'} -> [[Prototype]]: Promise, [[PromiseState]]: "fulfilled", [[PromiseResult]]: "hcs1105"

// 2. async
async function fetchUser() {
  // do network request in 10 seconds
  return 'fedev1105';
}

const user2 = fetchUser();
user2.then(userName => console.log(userName)); // fedev1105
console.log(user2); // Promise {<fulfilled>: 'fedev1105'} -> [[Prototype]]: Promise, [[PromiseState]]: "fulfilled", [[PromiseResult]]: "fedev1105"

// 3. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return 'Apple';
}

async function getBanana() {
  await delay(1000);  
  return 'Banana';
}

/*
 * Promise로 구현한다면
function getBanana() {
  return delay(3000)
  .then(() => 'banana');
}
 */

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();

  return `${apple} + ${banana}`;
}

/*
 * Promise로 구현한다면
function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  });
}
 */

pickFruits().then(fruit => console.log(fruit)); // Apple + Banana