/**
 * Using function to create objects
 */

function IdolModel_1(name, year) {
	// console.log(new.target);
	if(!new.target) {
		return new IdolModel_1(name, year);
	}
	this.name = name;
	this.year = year;
	this.dance = function() {
		return `${this.name}이 춤을 춥니다.`;
	}
}

const yujin_1 = new IdolModel_1('안유진', 2003);
console.log(yujin_1); // IdolModel_1 {name: '안유진', year: 2003, dance: ƒ}
console.log(yujin_1.dance()); // 안유진이 춤을 춥니다.

const yujin_2 = IdolModel_1('안유진', 2003);
console.log(yujin_2); // IdolModel_1 {name: '안유진', year: 2003, dance: ƒ}
console.log(this.name); // 안유진

const IdolModel_2 = (name, year) => {
	this.name = name;
	this.year = year;
};

/**
 * new 키워드는 화살표 함수에 쓸 수 없다.
 * const yujin_3 = new IdolModel_2('안유진', 2003); // Uncaught TypeError: IdolModel_2 is not a constructor
 */