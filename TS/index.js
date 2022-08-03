//변수
let names = "khj";
let age = 30;
let birthArea = "chanWon";
let Singer = {
    SingerName: "btob",
    songName: "아름답고도 아프구나",
};
let project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
let member = 123; //Union Type : 타입2개 이상 합친 새로운 타입 만들기
let members = [1, "2", 3]; //배열안에 숫자랑,문자 타입 지정
let object = { a: 123 }; // 숫자랑,문자 가능한 object 타입 지정
let Name; // 모든 자료형 허용해줌  => any를 막사용하면 타입스크립트를 사용하는 의미가 없음
// 타입실드 해제문법으로 사용(일반 js변수로 만들고 싶을때 사용)
// 단점 : 타입관련 버그가 나도 잡아주지 않는다.
Name = 123;
Name = "123";
Name = true;
let Name1; // any와 유사하지만 unknown은 타입관련버그를 잡아주기때문에 any보다 안전하다.
Name1 = 123;
Name1 = "123";
Name1 = true;
let user = "kim";
let ages = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
// 함수
function pracFun(x) {
    //return 되는 값은 숫자타임으로 제한한다는 뜻
    return x * 2;
}
pracFun(5);
function pracFun1(x) {
    // void : 함수에서만 사용가능, 실수로 뭔가 return하는걸 사전에 막을수 있음.
    1 + 1;
}
pracFun(5);
function pracFun2(x) {
    // ?  => 옵션임. 파라미터값이 들어올수도 있고 안들어올수도있다~ 는 뜻 ( | undefined 와 같은뜻)
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
pracFun2("ㅇㄹㅇ");
function pracFun3(x) {
    return x.toString().length;
}
pracFun3(245);
function pracFun4(money, house, charm) {
    let score = 0;
    score += money;
    if (house === true) {
        score += 500;
    }
    if (charm === "상") {
        score += 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
}
console.log(pracFun4(100, true, "상"));
//Narrowing : type이 아직 하나로 확정되지 않았을경우 사용 타입을 하나로 정해서 사용하는 문법
// 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작이 가능하다.
// if문을 썼으면 끝까지 써야 안전하다. else,else if를 안쓰면 에러로 잡아버릴수가 있다.
//Narrowing으로 판정해주는 문법들
// -typeof변수, 속성명 in 오브젝트자료, 인스턴스 instanceof부모
// 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인식함
function myFunction(x) {
    if (typeof x === "string") {
        //typeof : type을 체크할때 사용할수있는 자바스크립트 연산자
        return x + "1";
    }
    else {
        return x + 1;
    }
}
myFunction(123);
function myFunction2(x) {
    let array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
myFunction2(123);
//assertion문법 : type 덮어쓰기 => 남발하면안됌.
//assertion문법 용도
// 1.Narrowing할때 사용.
// 2.무슨타입이 들어올지 100% 확실할때 사용.
//   => number값이들어와야하는데 assertion를 해놓으면 string값이 들어와도 버그를 캐치하지 못하는 문제 발생하기때문.
// Narrowing을 사용하고, assertion은 남이 짠코드 수정할때 정말 왜 타임에러가 나는지 모르겠을때만 사용하는것이 좋음..(디버깅용,비상용)
function myFunction3(x) {
    let array = [];
    array[0] = x; //왼쪽에 있는 변수를 number type으로 덮어 써주세요 라는 뜻.
}
myFunction3(123);
function arrayPrac(x) {
    let answer = [];
    x.forEach((b) => {
        if (typeof b === "string") {
            answer.push(parseFloat(b)); // parseFloat: 숫자로 바꿈
        }
        else {
            answer.push(b);
        }
    });
    return answer;
}
console.log(arrayPrac([123, "3"]));
function arrayPrac2(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        // array 자료인지 확인
        return x.subject[x.subject.length - 1];
    }
    else {
        return "없음";
    }
}
console.log(arrayPrac2({ subject: "math" }));
console.log(arrayPrac2({ subject: ["english", "art"] }));
let animals = 123;
let teacher = { name: "john", age: 20 };
let friend = {
    name: "엠버",
};
let square2 = {
    width: 100,
};
let position = { x: 1, y: 2 };
let test = {
    size: 123,
    position: [1, 2, 3],
};
let inpo = {
    name: "kim",
    adult: false,
    phone: 1234,
};
//Literal types (엄격한 타입지정)
//변수에 뭐가 들어올지 엄격하게 관리 가능
//Union Type도 가능
// 자동완성이 가능함.
//const 변수에 자료를 여러개 저장해서 사용할수있음.
let name1;
// name1 = 123; //=>오류남
let name2;
name2 = "jin";
function prac(a) {
    return ["바위", "보"];
}
prac("가위");
//Literal types 문제점
var data = {
    name: "kim",
};
function MyFun(a) { }
MyFun(data.name);
const MyFunc = (a) => {
    return 10;
};
let userInpo = {
    name: "kim",
    age: 30,
    plusOne(a) {
        return a + 1;
    },
    changeName: () => { },
};
userInpo.plusOne(1);
let cutZero = (x) => {
    let result = x.replace(/^0+/, "");
    return result;
};
let removeDash = (x) => {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
};
function MyPrac(a, func1, func2) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
}
MyPrac("010-1111-2222", cutZero, removeDash);
//ts파일로 html 수정하는법
//HTML 조작시 narrowing 방법
let title = document.querySelector("#title");
if (title != null) {
    title.innerHTML = "반가워요";
}
//---------------------------------------------
let title1 = document.querySelector("#title");
if (title1 instanceof Element) {
    title1.innerHTML = "반가워요";
}
//---------------------------------------------
let title2 = document.querySelector("#title");
title2.innerHTML = "반가워요";
//---------------------------------------------
let title3 = document.querySelector("#title");
if (title3 === null || title3 === void 0 ? void 0 : title3.innerHTML) {
    title3.innerHTML = "반가워요";
}
//=========================================
//Element 타입명
let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    //<a>에 필요한 정확한 타입명을 입력해야함
    link.href = "https://kakao.com";
}
//여러개 변경할때
let link2 = document.querySelectorAll(".naver"); // 많은 요소를 한번에 찾을 수있음
link2.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
let link3 = document.querySelectorAll(".naver");
for (let i = 0; i < 3; i++) {
    let a = link3[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
}
//=========================================
//eventListener 부착
let button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () { });
