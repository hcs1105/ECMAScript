/**
 * All about objects
 * 
 * 객체를 선언할 때 사용하는 방법
 * 1) new 연산자를 이용하여 객체 생성
 * 2) 객체 리터럴를 이용하여 객체 생성
 * 3) class를 인스턴스화해서 객체 생성
 * 4) 생성자 함수를 이용하여 객체 생성
 */

// 1) new 연산자를 이용하여 객체 생성
const yujin_1 = new Object();
yujin_1.name = '안유진';
yujin_1.year = 2003;

console.log(yujin_1); // {name: '안유진', year: 2003}


// 2) 객체 리터럴를 이용하여 객체 생성
const yujin_2 = {
  name : '안유진',
  year : 2003,
};

console.log(yujin_2); // {name: '안유진', year: 2003}

// 3) class를 인스턴스화해서 객체 생성
class IdolModel_1 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

console.log(new IdolModel_1('안유진', 2003)); // IdolModel_1 {name: '안유진', year: 2003}

// 4) 생성자 함수를 이용하여 객체 생성
function IdolFunction_1(name, year) {
  this.name = name;
  this.year = year;
}

const gaEul_1 = new IdolFunction_1('가을', 2002);
console.log(gaEul_1); // IdolFunction_1 {name: '가을', year: 2002}