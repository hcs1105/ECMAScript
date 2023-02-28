'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj); 
// Symbol과 function은 Object의 데이터가 아니므로 console() 메소드로 찍으면 값이 표현되지 않음.
let json = JSON.stringify(true);

console.log(json);

json = JSON.stringify(['apple', 'banner']);
console.log(json); // ["apple","banner"]

const rabbit = {
  name : 'hcs1105',
  color : 'white',
  size : null,
  birthDate : new Date(),
  // Symbol : Symbol('id'), 
  jump : () => {
    console.log(`${this.name} can be jump!`);
  }
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"hcs1105","color":"white","size":null,"birthDate":"2023-02-28T07:21:46.096Z"}

json = JSON.stringify(rabbit, ['name']);
console.log(json); // {"name":"hcs1105"}

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); // {"name":"hcs1105","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === 'name' ? 'james' : value;
});
console.log(json); // {"name":"james","color":"white","size":null,"birthDate":"2023-02-28T07:38:30.304Z"}

// 2. JSON to Object
// parse(JSON)