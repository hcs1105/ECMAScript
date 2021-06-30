/* 
 * 함수로 객체 생성하는 방법 1 - 공장 함수(factory function)
 * 공장 함수(factory function) or factory pattern : 객체를 반환(return)하는 함수
 * 생성한 3개의 객체는 서로 참조 관계가 아닌 다른 관계이어야 함.
 * 그래서 매번 새로운 객체를 반환하도록 객체 리터럴를 사용함(또는 기존 객체를 깊은 복사함).
 */
function createMonster(name, hp, att, xp){
  return { 
    name, hp, att, xp, 
    attack(monster){
      monster.hp -= this.att;
      this.hp -= monster.att;
    },
    heal(monster){
      this.hp += 20;
      // this.hp -= monster.att;
    }
  };
}

const monster1 = createMonster('슬라임', 25, 10, 11);
const monster2 = createMonster('슬라임', 26, 10, 11);
const monster3 = createMonster('슬라임', 25, 11, 10);

/*
 * 함수로 객체를 생성하는 뱡법 2 - 생성자 함수(constructor function)
 * 생성자 함수(constructor function) :  new 연산자를 사용하여 객체를 생성하는 함수
 * new 연산자를 사용하면 새로운 객체가 생성됨. 그래서 this는 window 객체가 아니고 생성된 객체임.
 * new Monster도 함수이므로 리턴값은 생성된 객체임.
 * 생성자 함수 이름은 첫 글자를 대문자로 쓰는 것이 관례임.
 * 생성자 함수에 메소드를 추가할 때 prototype이라는 속성 안에 추가해야 됩니다.
 * 프로토타입 메소드 : prototype 속성 안에 추가된 메소드
 * 프로트타입 메소드를 사용하면 공장 함수와 달리 메소드를 재사용할 수 있다.
 * 다만 생성자 함수와 프로토타입 메소드가 하나로 묶어 있지 않다.
 */

function Monster(name, hp, att, xp){
  this.name = name; 
  this.hp = hp; 
  this.att = att; 
  this.xp = xp; 
}

Monster.prototype.attack = function(monster){
  monster.hp -= this.att;
  this.hp -= monster.att;
};

Monster.prototype.heal = function(monster){
  this.hp += 20;
  // this.hp -= monster.att;
};

const monster1 = new Monster('슬라임', 25, 10, 11);
const monster2 = new Monster('슬라임', 26, 10, 11);
const monster3 = new Monster('슬라임', 25, 11, 10);

/*
 * 생성자 함수를 조금 더 편하게 사용하려고 클래스가 도입되었음(ES6)
 * 클래스도 객체임.
 * 클래스(class)는 객체를 생성하기 위해 쓰이는 템플릿임.
 * 클래스(class)는 ES6 때 자바스크립트에 추가된 문법이며 이전에는 함수로 객체를 만듦.
 * 뭔가를 찍어 내거나 상호 작용할 때 클래스를 사용하면 유용함.
 * this는 생성된 객체 자신임.
 * constructor 메소드는 객체를 생성하고 초기화하기 위해 쓰이는 메소드임.
 * new 연산자를 쓰지 않으면 에러가 발생함.
 * 클래스 문법의 장점은 객체의 메소드들을 같이 묶을 수 있으며 메소드 함수를 매번 재생성하는 문제도 발생하지 않는다.
 */

class Monster {
  constructor(name, hp, att, xp){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
  }
  attack(monster){
    monster.hp -= this.att;
    this.hp -= monster.att;
  }
  heal(monster){
    this.hp += 20;
    // this.hp -= monster.att;
  }
}

const monster1 = new Monster('슬라임', 25, 10, 11);
const monster2 = new Monster('슬라임', 26, 10, 11);
const monster3 = new Monster('슬라임', 25, 11, 10);