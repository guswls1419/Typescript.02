interface User {
  age: number;
  name: string;
}
//변수에 인터페이스 활용
let seho: User = {
  age: 30,
  name: "hyunjin",
};

//함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: "캡틴",
  age: 100,
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number) {
  return a + b;
};

// 인덱싱
//interface를 이용해 array의 인덱싱 타입을 지정할수있다.
interface StringArray {
  [index: number]: string;
}
let arr: StringArray = ["a", "b", "c"];
arr[0]; //'a'

//딕셔너리 패턴
//RegExp=정규표현식 생성자타입
interface StringRegexDictionary {
  [key: string]: RegExp;
}
let obj: StringRegexDictionary = {
  //   sth: /abc/,
  //cssFile : "css", //err => 정규식이 와야하는데 문자열이와서
  cssFile: /\.css$/, // o
  jsFile: /\.js$/, // o
};
//obj['cssFile'] = 'a' //정규식이 와야하는데 문자열이와서

Object.keys(obj).forEach(function (value) {
  //딕셔너리 패턴이 좋은점은
  //이렇게 Object.keys로 키들만 모아서 배열로 만든다음
  //forEach돌리면 이 함수 안에 들어오는 값들이 모두 타입이 추론되어 타입이 지정된다.
});

//인터페이스 확장
//확장시 확장한 내부에 있는 모든 타입을 지정해주어야한다.
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var captain: Developer = {
  language: "ts",
  name: "캡틴",
  age: 100,
};
