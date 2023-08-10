// problem 1. 간단한 메소드 만들기

// solution 1 - 창수
var person1 = {
  name : '손흥민', 
  sayHi : function() {
    console.log(`안녕 나는 ${this.name}`);
  } 
};

person1.sayHi();

// solution 2 - 창수
var person2 = {
  name : '손흥민', 
  sayHi : () => console.log(`안녕 나는 ${this.person2.name}`) 
};

person2.sayHi();

// solution 3 - 창수
var person3 = {
  name : '손흥민',  
};

person3.sayHi = function() {
  console.log(`안녕 나는 ${this.name}`);
}

person3.sayHi();

// solution 4 - 창수
var person4 = {
  name : '손흥민',  
};

person4.sayHi = () => console.log(`안녕 나는 ${this.person3.name}`);

person4.sayHi();

// solution 5 - 코딩 애플
var 사람 = {
  name : '손흥민',
  sayHi : function(){
    console.log('안녕 나는 ' + this.name);
  }
};

사람.sayHi();

// problem 2. 오브젝트 내의 데이터를 전부 더해 주는 매소드 만들기

// solution 1 - 창수
var information1 = {
  data : [1, 2, 3, 4, 5],
};

information1.sum = () => {
  var sum = 0;

  this.information1.data.forEach(i => sum += i);
  console.log(sum);
};

information1.sum();

// solution 2 - 창수
var information2 = {
  data : [1, 2, 3, 4, 5],
};

information2.sum = function() {
  var sum = 0;
  this.data.forEach(function(i){
    return sum+= i
  });
  console.log(sum);
};

information2.sum();

// solution 3 - 코딩 애플
var 자료 = {
  data : [1, 2, 3, 4, 5]
};

자료.전부더하기 = function(){
	var 합 = 0;
	this.data.forEach(function(a){
  	합 = 합 + a;
	});
	console.log(합);
};

자료.전부더하기();

