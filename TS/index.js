//변수
let names = 'khj';
let age = 30;
let birthArea = "chanWon";
let Singer = { SingerName: "btob", songName: "아름답고도 아프구나" };
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
let member = 123; //Union Type : 타입2개 이상 합친 새로운 타입 만들기
let members = [1, '2', 3]; //배열안에 숫자랑,문자 타입 지정
let object = { a: 123 }; // 숫자랑,문자 가능한 object 타입 지정
let Name; // 모든 자료형 허용해줌  => any를 막사용하면 타입스크립트를 사용하는 의미가 없음
// 타입실드 해제문법으로 사용(일반 js변수로 만들고 싶을때 사용)
// 단점 : 타입관련 버그가 나도 잡아주지 않는다.
Name = 123;
Name = '123';
Name = true;
let Name1; // any와 유사하지만 unknown은 타입관련버그를 잡아주기때문에 any보다 안전하다.
Name1 = 123;
Name1 = '123';
Name1 = true;
let user = 'kim';
let ages = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// 함수
function pracFun(x) {
    return x * 2;
}
pracFun(5);
function pracFun1(x) {
    1 + 1;
}
pracFun(5);
function pracFun2(x) {
    if (x) {
        console.log('안녕하세요' + x);
    }
    else {
        console.log("이름이 없습니다.");
    }
}
pracFun2("ㅇㄹㅇ");
