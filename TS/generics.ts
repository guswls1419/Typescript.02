function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText<string>("하이");
//함수를 호출할때 타입을 지정해서 넘기겠다

//===============================================
//기존 타입 정의 방식과, 제네릭을 썻을때의 차이점
//1. 기존타입 정의 방식
function logTexts(text: string) {
  console.log(text);
  return text;
}
logTexts("하이");
// logTexts(10); =>error
// logTexts(true); =>error
// => 타입에러가 발생하지 않는이유는 암묵적으로
// logTexts의 text가 암묵적으로 any로 지정되어있기 때문.
// 이때 만약 text.split().reverse().join(''); 과 같은 문자열을 다루는 메소드를 사용한다면
// logTexts는 문자열만 사용할수있는 함수가 된다.

function logNumber(num: number) {
  console.log(num);
  return num;
}
logNumber(10);

// 이와같이 타입을 다르게 사용하기 위해서 같은 로직의 함수를
// 중복해서 생성해 나가는것은 좋지않은 코드다.
// 코드의 가독성이나, 코드가 비대해지기때문에 유지보수 측면에서 좋지않다.

//2. 유니온 타입 방식의 문제점
function logTextsUnion(text: string | number) {
  console.log(text);
  return text;
}
logTextsUnion("하이");
logTextsUnion(10);
// 위와 같은 함수로 봤을때 현재 logTextsUnion 함수는 string과 number의 교집합,
// 즉, string과 number가 공통으로 접근할수있는 속성이나,api에 대해서만 프리뷰(자동완성)을 제공한다.
const test = logTextsUnion("a");
//또한 test의 타입은 여전히 string과 number의 타입을 가지게된다.
// 여기서 test.split('')을 사용하게되면 string | number의 타입에서 split이 제공되지않는다는 오류가 발생한다.
// 왜냐하면 정확한 string과타입이 제공되어야만 split을 사용할 수 있게 때문이다.

//3. 제네릭의 장점과 타입 추론에서의 이점
function logTextsGenerics<T>(text: T): T {
  //<T>는 어떤 타입을 받을것인지 정의하는것.
  console.log(text);
  return text;
}
const str = logTextsGenerics<string>("a");
str.split("");
// 함수를 호출할때 <string> 으로 타입을 지정해서 사용하겠다는 의미
// 위와같이 string으로 정확한 타입을 지정해서 함수를 호출하게되면,
// split을 사용했을때 오류가 발생하지 않는다.
// 즉, 타입이 틀어지지않고 잘 구성해 나갈수 있는것이 제네릭의 장점이라고 할수있다.

const boolean = logTextsGenerics<boolean>(true);
// 이와같이 기존 타입추론방식에서 처럼 각각 정의 하는것이 아닌,
// 실제로 함수를 정의할때 타입을 비워두고 그타입에 어떤 타입이 들어갈지
// 함수를 호출하는 시점에서 정의하는것이 제네릭의 장점이다.
// 타입을 추론해서 반환하는 값에 까지 타입을 붙일수있다.

// 인터페이스에 제넥릭을 선언하는 방법

// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const objt: Dropdown = { value: "abc", selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
// interface 옆에 <T>는 무엇일까?
// 타입을 선언하는 시점에 타입을 넘긴다고 선언하는것.

const objt: Dropdown<string> = { value: "abc", selected: false };

//interface에 제네릭을 선언해서 value의 타입을 바꿀수있다.

//제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  //console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
logTextLength<string>(["hi", "ddd"]);
//만약 text.length 위와같이 넣게되면 에러가 발생한다.
//그이유는 해당시점에서 타입스크립트는 text값으로 어떤 타입이 들어올지 모르기때문이다.
//그렇기 때문에 <T> 제네릭타입에 제한(힌트)을 줘서 해결할수있다.

//제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLengtht<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLengtht("a");
logTextLengtht({ length: 10 });
//interface로 타입을 지정하고 제네릭 타입에 extends를 이용해서 length타입을 제공할수 있다.

//제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption("df");

//keyof를 사용하게되면 ShoppingItem이 가지고 있는 key들 중에 한가지가 타입만 들어갈수있다.
getShoppingItemOption("name");
// ctrl+space 누르면 들어갈수있는 key만 미리보기로 보여진다.
// 즉 keyof는 interface에 정의 된 객체의 키만 들어갈수있도록 제한할수있다.
