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

const multiply = function(x, y, z) {
	console.log(arguments);
	return x * y * z;
};

console.log(multiply(4, 5, 6));
console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true

const multipleAll = function(...args) {
	return Object.values(args).reduce((a, b) => a * b, 1);
};

console.log(multipleAll(3, 4, 5, 6, 7, 8, 9, 10)); // 1814400

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다
// 클로저(Closure) : 중첩된 함수에서 자식 함수가 부모 함수의 변수에 접근하는 현상
let globalMessage = 'global'; // global variable

function printMessage(){
  let message = 'hello';
  console.log(message); // hello, local variable
  console.log(globalMessage); // global
  
  function printAnthor(){
    console.log(message); // hello;
    let childMessage = 'hi';
  }
  printAnthor();
  // console.log(childMessage); // Uncaught ReferenceError: childMessage is not defined
  // return undefined;
}
printMessage();
// console.log(message); // Uncaught ReferenceError: message is not defined

// 6. Return a value
function sum(a, b){
  return a + b;
}

const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`); // 3

// 7. Early return, early exit
// bad
function upgradeUser1(user){
  if(user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser2(user){
  if(user.point <= 10){
    return;
  }
  // long upgrade logic...
}

// 8. First-class function
// Functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 9. Function expression
// A function declaration can be called earlier than it is defined. (hoisted) 
// A function exprerssion is created when the execution reaches it.

const print = function() { // anonymous function
  console.log('print');
}

print(); // print
const printAgain = print;
printAgain(); //print
const sumAgain = sum;
console.log(sumAgain(1,3)); // 4

// 10. Callback function using function expression
// 콜백 함수 : 함수를 다른 함수의 파라미터 전달받아 특정 시점에 호출되는 함수
function randomQuiz(answer, printYes, printNo){
  if(answer === 'love you'){
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function(){
  console.log('Yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
  console.log('No!');
}

randomQuiz('wrong', printYes, printNo); // No!
randomQuiz('love you', printYes, printNo); // Yes!

// Arrow function
// 화살표 함수 : function 키워드를 사용하여 만든 함수 표현식을 화살표로 변경하여 만든 함수
// always anonymous
const simplePrint = () => console.log('simplePrint');

/*  
 * 같은 표현 :  
const simplePrint = function(){
  console.log('simplePrint');
}
*/

simplePrint(); // simplePrint

const add = (a, b) => a + b;

/*  
 * 같은 표현 :  
const add = function(){
  return a + b;
}
*/

add(1,2);

const simpleMultiply = (a, b) => {
  // do something more
  return a + b;
}

// IIFE : Immediately Invoked Function Expression
// 즉시 실행 함수 : 선언함과 동시에 바로 호출되는 함수
function hello() {
  console.log('IIFE1');
}

hello(); // IIFE1

(function hello() {
  console.log('IIFE2'); // IIFE2
})(); 

(function(x, y){
	console.log(x * y); // 2
})(1, 2);

// Quiz
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder

function calculate(command, a, b){
  switch (command) {
    case 'add' :
      return a + b;
    case 'substract' :
      return a - b;
    case 'divide' :
      return a / b;
    case 'multiply' :
      return a * b;
    case 'remainder' :
      return a % b;
    default : 
      return 'Unknown command';
  }
}

console.log(calculate('add', 3, 4)); // 7
console.log(calculate('substract', 3, 4)); // -1
console.log(calculate('divide', 3, 4)); // 0.75
console.log(calculate('multiply', 3, 4)); // 12
console.log(calculate('remainder', 3, 4)); // 3
console.log(calculate('', 3, 4)); // Unknown command