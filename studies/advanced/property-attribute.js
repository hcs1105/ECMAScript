/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적인 값을 가지고 있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성되는 프로퍼티(ex. getter, setter) 
 */

const yujin_1 = {
	name : '안유진',
	year : 2003,
};

console.log(Object.getOwnPropertyDescriptor(yujin_1, 'name')); // {value: '안유진', writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(yujin_1, 'year')); // {value: 2003, writable: true, enumerable: true, configurable: true}

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부, false로 설정하면 값을 변경할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부, for...in Loop 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트를 재정의할 수 있는지 여부, false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다. 단, writable이 true이면, 값과 writable만 변경 가능하다.
 */

console.log(Object.getOwnPropertyDescriptors(yujin_1));

const yujin_2 = {
	name : '안유진',
	year : 2003,
	get age(){
		return new Date().getFullYear() - this.year;
	},
	set age(age) {
		this.year = new Date().getFullYear() - age; 
	}
};

console.log(yujin_2.age); // 20 
yujin_2.age = 32;
console.log(yujin_2.age); // 32
console.log(yujin_2.year); // 1991
console.log(Object.getOwnPropertyDescriptor(yujin_2, 'age')); // {enumerable: true, configurable: true, get: ƒ, set: ƒ}

yujin_2.height = 172;
console.log(yujin_2); // {name: '안유진', year: 1991, age: [Getter/Setter], height: 172}
console.log(Object.getOwnPropertyDescriptor(yujin_2, 'height')); // {value: 172, writable: true, enumerable: true, configurable: true}

Object.defineProperty(yujin_2, 'height', {
	value : 180,
	writable : true,
	enumerable : true,
	configurable : true,
});

console.log(yujin_2); // {name: '안유진', year: 1991, age: [Getter/Setter], height: 180}
console.log(Object.getOwnPropertyDescriptor(yujin_2, 'height')); // {value: 180, writable: true, enumerable: true, configurable: true}

Object.defineProperty(yujin_2, 'height', {
	writable : false,
});

console.log(Object.getOwnPropertyDescriptor(yujin_2, 'height')); // {value: 180, writable: false, enumerable: true, configurable: true}

yujin_2.height = 172;
console.log(yujin_2); // {name: '안유진', year: 1991, age: [Getter/Setter], height: 180}

console.log(Object.keys(yujin_2)); // ['name', 'year', 'age', 'height']
for(const key in yujin_2) {
	console.log(key); // name year age height
}

console.log(Object.values(yujin_2)); // ['안유진', 1991, 32, 180]

Object.defineProperty(yujin_2, 'name', {
	enumerable : false,
});

console.log(Object.getOwnPropertyDescriptor(yujin_2, 'name')); // {value: '안유진', writable: true, enumerable: false, configurable: true}
console.log(Object.keys(yujin_2)); // ['year', 'age', 'height']
for(const key in yujin_2) {
	console.log(key); // year age height
}
console.log(yujin_2); // {year: 1991, height: 180, name: '안유진'}
console.log(yujin_2.name); // 안유진

Object.defineProperty(yujin_2, 'height', {
	writable : true,
	configurable : false,
});

console.log(Object.getOwnPropertyDescriptor(yujin_2, 'height')); // {value: 180, writable: true, enumerable: true, configurable: false}

// Object.defineProperty(yujin_2, 'height', {
// 	enumerable : false,
// }); // Uncaught TypeError: Cannot redefine property: height

Object.defineProperty(yujin_2, 'height', {
	value : 172,
});

console.log(Object.getOwnPropertyDescriptor(yujin_2, 'height')); // {value: 172, writable: true, enumerable: true, configurable: false}

Object.defineProperty(yujin_2, 'height', {
	writable : false,
});

console.log(Object.getOwnPropertyDescriptor(yujin_2, 'height')); // {value: 172, writable: false, enumerable: true, configurable: false}