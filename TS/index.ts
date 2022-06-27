//변수
let names : string = 'khj';
let age : number = 30;
let birthArea : string = "chanWon" ;
let Singer : {SingerName : string, songName : string} = {SingerName : "btob", songName : "아름답고도 아프구나"}

let project : {member : string[], days : number, started : boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }


  let member : number | string = 123; //Union Type : 타입2개 이상 합친 새로운 타입 만들기
  let members : (number | string) [] = [1,'2',3]; //배열안에 숫자랑,문자 타입 지정
  let object : {a : string | number} = {a : 123 } // 숫자랑,문자 가능한 object 타입 지정

  let Name : any; // 모든 자료형 허용해줌  => any를 막사용하면 타입스크립트를 사용하는 의미가 없음
                  // 타입실드 해제문법으로 사용(일반 js변수로 만들고 싶을때 사용)
                  // 단점 : 타입관련 버그가 나도 잡아주지 않는다.
    Name= 123 ;
    Name= '123' ;
    Name= true ;


  let Name1 : unknown; // any와 유사하지만 unknown은 타입관련버그를 잡아주기때문에 any보다 안전하다.
    Name1 = 123 ;
    Name1 = '123' ;
    Name1 = true ;

let user : string = 'kim';
let ages : undefined | number = undefined;
let married :boolean = false; 
let 철수 : (string | undefined |number | boolean)[] = [user, age, married];

let 학교 : {score : (number|boolean)[],teacher : string, friend : string |string[]}= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

// 함수
function pracFun(x :number) : number{ //return 되는 값은 숫자타임으로 제한한다는 뜻
    return x*2 
}
pracFun(5)

function pracFun1(x :number) :void{ // void : 실수로 뭔가 return하는걸 사전에 막을수 있음.
    1+1 
}
pracFun(5)

function pracFun2(x? :string){ 
    if(x){
        console.log('안녕하세요'+ x)
    }else{
        console.log("이름이 없습니다.")
    }
}
pracFun2("ㅇㄹㅇ")
