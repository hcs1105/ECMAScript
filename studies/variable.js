// 1. Use strict
// add in ES 5
// use this for Vanilla JavaScript
'use strict';

console.log(age); // undefined

// 2. Variable
// let (added in ES 6)

let globalName = 'global name';

{
    let name = 'hcs1105';
    console.log(name); // hcs1105

    name = 'hello';
    console.log(name); // hello
    console.log(globalName); // global name
}

console.log(name); 
console.log(globalName); // global name

// var (don't ever use this!)
// 호이스팅 : 특정 스코프 안에 선언된 변수는 코드에 적힌 순서와 상관없이 '최상단에 선언된 것처럼' 끌어올려지는 현상 
// var hoisting : move declaration from bottom to top