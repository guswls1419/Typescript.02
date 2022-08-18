//ES2015 (ES6)

class Person {
  //인스턴스 생성
  //클래스 로직
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}
//생성 되었습니다.

let seho = new Person("세호", 30);
//인스턴스로 만들어낸 객체로 받을수 있다.
console.log(seho);

//class를 쓰는이유는?
// 1. 자바스크립트의 프로토타입과 상속이란?
// - 객체를 활용할때 중복되는 코드를 줄여야 하는데 이때 상속을 사용한다.
//     ex)
//     let user = {name : 'capt', age:100};
//     let admin = {};
//     admin.__proto__=user; //{name : 'capt', age:100}
//     admin.name //"capt"
//     admin.age //100
//      => name과age를 user에서 가지고 있던 속성들을 admin이 상속 받아 재활용할수 있게된다.
// 이런 관점에서 object,array, 기타 타입등등은 이처럼 프로토타입으로 거슬러올라가서 사용할수잇게된다.

// 2. 자바스크립트의 프로토타입의 활용사례
//  - object.~~~ => 최상위 위치에 있는 메서드나,속성을 쓸 수 있다.
//    (Built-in Javascriot API)

// 3. 프로토타입과 class와의 관계
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let capt = new Person("캡틴", 100);
//===============================
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let hj = new Person("현진", 30);
console.log(hj);

// 1번째는 생성자 함수고 2번째는 class 이다.
// 사실상 이두개는 모두 같은 뜻을 나타내고 있다.
// 즉 생성자 함수 와 class는 같은 의미를 가진다.
// class는 객체지향 언어에 익숙한 사람들이 좀더
// 자바스크립트를 편하게 사용하기위해 만들어낸 es6 문법이다.
// class를 바벨같은걸로 돌려보면 실제로 생성자함수를 사용한것을 알수있다.
// 프로토타입기반으로 코딩을하는 자바스크립트 언어의 특성은
// class로 바뀌었다고 해서 바뀌진 않았다는것을 알수있다.
// (기존의 프로토타입 기반의 상속이 계속 유지가 된다.)
