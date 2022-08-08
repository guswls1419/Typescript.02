function rest(...a) {
    console.log(a);
}
rest(1, 5, 3, 5, 6, 6); //array로 들어옴
let { studeut, age } = { studeut: true, age: 20 };
let Objects = { student: true, age: 20 };
//========================================
function MyFun({ student, age }) {
    console.log(student, age);
}
MyFun({ student: true, age: 20 });
//========================================
function homework(...a) {
    let result = 0;
    a.forEach((i) => {
        if (result < i) {
            result = i;
        }
        return result;
    });
}
console.log(homework(4, 6, 3, 2));
function homework2({ user, comment, admin }) {
    console.log(user, comment, admin);
}
homework2({ user: "kim", comment: [3, 5, 4], admin: false });
function homework3([x1, x2, x3]) {
    console.log(x1, x2, x3);
}
console.log([40, "wine", false]);
function MyFun2(animal) {
    if ("swim" in animal) {
        animal.swim;
        //Fish 타입인지 검사가능
        //in을 사용하면 왼쪽에 있는속성이 오른쪽에있는 오브젝트에 들어가있는지 체크해줌
    }
}
//========================================
//Object instanceof class //오브젝트의 부모가 누군지 검사해주는것.(class는 오브젝트뽑는 기계)
//ex)
let Today = new Date();
if (Today instanceof Date) {
    //Today오브젝트가 Date로부터 생성되었는지 체크
}
function MyFun3(x) {
    if (x.wheel === "4개") {
        console.log("x는 Car타입이다.");
    }
}
//never => void와 유사하다. 뭔가를 리턴하지 않을때 쓸수있다.
//엄격한 조건이 필요함.
//조건1. return값이 없어야함.
//조건2. endpoint가 없어야함.(함수실행이 끝나지 않아야함)
function MyFun4() {
    throw new Error();
    //강제 에러내는식
    //에러가 나면 코드실행 중단됨
    //함수실행이 끝나는게 아니라 도중에 중단이 됨으로
    //never라는 타임을 가질수 있음.
}
function MyFun5() {
    while (true) {
        //참일때만 반복문이 돔
        //true로 강제로 넣어두면 내부코드를 무한히 반복함
        //never라는 타임을 가질수 있음.
    }
}
//never는 실제로 사용하는일이 거의없음.void로 대체가능하기때문
//코드를 이상하게 짜면 출몰하기때문에 어떨때 뜨는지 알아야함.
//ex)1
function MyFun6(parameter) {
    if (typeof parameter == "string") {
        console.log(parameter);
    }
    else {
        console.log(parameter); // 여기서 등장하는 never는 있을수 없다는 뜻
    }
}
//ex)2
let MyFun7 = function () {
    throw new Error();
};
