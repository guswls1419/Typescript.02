class Persons {
  private name: string;
  public age: number;
  readonly log: string; //readonly는 접근만 할수있고 값변경은 불가하다.

  //변수의 유효범위 문법(타입스크립트에서 제공하는 문법)
  // private = 해당 클래스안 에서만 사용할수있다.
  // public = 어디서나 접근할수있다. 기본적으로 주어지는 접근수준
  // protected = 해당 클래스와 서브클래스에서만 접근이 가능하다.
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
