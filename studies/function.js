'use strict';

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2, ...) {body... return;}
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS.
function printHello(){
  console.log('Hello'); 
}

printHello(); // Hello

function log(message){
  console.log(message); 
}

log('Hello! World'); // Hello! World
log(1234); // 1234

// TypeScript의 예시
/*
function log(message:string) : number {
  console.log(message); 
  return 0;
}
*/

// 2. parameters
// primitive parameters : pass by value
// object parameters : pass by reference

function changeName(obj){
  obj.name = 'coder';
}

const hcs1105 = {name : 'hcs1105'};

changeName(hcs1105);
console.log(hcs1105); // {name: 'coder'}

// 3. Default parameters (add in ES6)
function showMessage1(message, from){
  console.log(`${message} by ${from}`);
}

showMessage1('Hi!'); // Hi! by undefined

function showMessage2(message, from){
  if(from === undefined){
    from = 'unknown';
  }
  console.log(`${message} by ${from}`);
}

showMessage2('Hi!'); // Hi! by unknown

function showMessage3(message, from = 'unknown'){
  console.log(`${message} by ${from}`);
}

showMessage3('Hi!'); // Hi! by unknown

// 4. Rest parameters (add in ES6)
function printAll1(...args) { // 파라미터가 배열 형태로 전달
  for(let i = 0; i < args.length; i++){
    console.log(args[i]);
  }
}

printAll1('beautiful', 'smile', 'hcs1105'); // beautiful, smile, hcs1105

function printAll2(...args){
  for(const arg of args){
    console.log(arg);
  }
}

printAll2('beautiful', 'smile', 'hcs1105'); // beautiful, smile, hcs1105

function printAll3(...args){
  args.forEach((arg) => console.log(arg));
}

printAll3('beautiful', 'smile', 'hcs1105'); // beautiful, smile, hcs1105