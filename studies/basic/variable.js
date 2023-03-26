// 1. Use strict
// add in ES 5
// use this for Vanilla JavaScript
'use strict';

console.log(age); // undefined

// 2. Variable, rw(read/write)
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
// 호이스팅 : 변수와 함수 선언문이 코드에 적힌 순서와 상관없이 코드의 '최상단에 선언된 것처럼' 끌어올려지는 현상 
// var hoisting : move declaration from bottom to top.
{
    age = 7;
    var age;
}
// has no block scope.
console.log(age); // 7

// 3. Constant, r(read only)
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety

const dayInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : primitive types, frozen object(i.e. object.frozen())
// Mutable data types : all objects by default are mutable in JS        

// 4. Variable types
// primitive, sing item - number, string, boolean, undefined, null, symbol 
// object - box container
// function - first-class function

let a = 12; // TS -> let a : number = 12;
let b = 1.2; // TS -> let b : number = 1.2;

const count = 17; // integer
const size = 17.1; // decimal number

console.log(`value: ${count}, type: ${typeof count}`); // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number - special numberic values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt(fairly new, don't use it yet)
// support browsers : chrome, firefox, safari(2020년 4월 11일에는 지원되지 않았지만, 2023년 2월 14일 현재 지원됨)
const bigInt = 1234567890123456789012345678901234567890n; // over(-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // value: 1234567890123456789012345678901234567890, type: bigint
Number.MAX_SAFE_INTEGER;

// string
const char  = 'c';
const jsCreator = 'brendan';
const greeting = 'hello ' + jsCreator;

console.log(`value: ${greeting}, type: ${typeof greeting}`); // value: hello brendan, type: string
const helloBob = `hi ${jsCreator}!`; // templete literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // value: hi brendan!, type: string
// 같은 표현 : console.log('value: ' + helloBob + ', ' + 'type: ' + typeof helloBob);

// boolean
// true : any other value
// false : 0, null, undefined, NaN, ''

const canRead = true;
const test = 3 < 1; // false;

console.log(`value: ${canRead}, type: ${typeof canRead}`); // value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`); // value: false, type: boolean

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); // value: null, type: object

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`); // value: undefined, type: undefined

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');

console.log(symbol1 === symbol2); // false
console.log(symbol3 === symbol4); // true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // Uncaught TypeError: Cannot convert a Symbol value to a string
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol

// 5. Dynamic typing: dynamic typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
// console.log(text.charAt(0)); Uncaught TypeError: text.charAt is not a function

// object, real-life object, data structure
const hcs1105 = {name : 'hcs1105', age : 20};
hcs1105.age = 21;
console.log(hcs1105.age); // 21