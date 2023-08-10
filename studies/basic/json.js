'use strict';

// JSON
// JavaScript Object Notation

// 1. From Object to JSON
// stringify(obj); 
// Symbol과 function은 Object의 데이터가 아니므로 console() 메소드로 찍으면 값이 표현되지 않음.

// 오버로딩(overloading): 함수 이름이 동일하지만 매개변수(파라미터)가 다른 경우

let json = JSON.stringify(true);
const jsonType = typeof json;

console.log(json); // true
console.log(jsonType); // string

json = JSON.stringify(['apple', 'banner']);
console.log(json); // ["apple","banner"]
console.log(jsonType); // string

const rabbit = {
  name : 'hcs1105',
  color : 'white',
  size : null,
  birthDate : new Date(),
  // Symbol : Symbol('id'), -> JSON에 포함되지 않음.
  jump : () => { // 함수는 오브젝트의 데이터가 아니므로 JSON에 포함되지 않음.
    console.log(`${this.name} can be jump!`);
  }
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"hcs1105","color":"white","size":null,"birthDate":"2023-02-28T07:21:46.096Z"}
console.log(jsonType); // string

json = JSON.stringify(rabbit, ['name']); // 파라미터 replacer를 사용한 경우
console.log(json); // {"name":"hcs1105"}
console.log(jsonType); // string

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); // {"name":"hcs1105","color":"white"}
console.log(jsonType); // string

// 콜백 함수를 이용하영 파라미터 replacer를 표현한다면
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === 'name' ? 'james' : value;
});
console.log(json); // {"name":"james","color":"white","size":null,"birthDate":"2023-02-28T07:38:30.304Z"}
console.log(jsonType); // string

// 2. From JSON to Object
// parse(JSON)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
const objType = typeof obj;

console.log(obj); // {name: 'hcs1105', color: 'white', size: null, birthDate: '2023-02-28T07:45:00.345Z'}
console.log(objType); // object

rabbit.jump(); // can be jump!
// obj.jump(); // Uncaught TypeError: obj.jump is not a function

console.log(rabbit.birthDate.getDate()); // 26
// console.log(obj.birthDate.getDate()); Uncaught TypeError: obj.birthDate.getDate is not a function

// 파라미터 reviver를 이용하여 getDate() 메소드의 값이 표시되지 않는 현상 해결
const obj1 = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === 'birthDate' ? new Date() : value;
});

const objType1 = typeof obj1;
console.log(objType1); // object

console.log(rabbit.birthDate.getDate()); // 26
console.log(obj1.birthDate.getDate()); // 26
console.log(typeof obj1.birthDate); // object
console.log(typeof obj1.birthDate.getDate()); // number