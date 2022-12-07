// 변수
// 키워드 변수입름 : 타입 = 값;

var str1: string = '문자열';
var num1: number = 1;
var flag: boolean = true;
var any: any;

any = 1;
any = '문자';
any = false;
any = []; // object 타입도 허용하는 any


// // 인터페이스 
// // 약속, 규칙을 정의해놓은 것 
// interface Student {
//     name: string,
//     age: number,
//     nickname ?: string; // 옵셔널! 있어도 되고 없어도 되고 표시!!
// };

// var stu1: Student = {
//     name : '이름',
//     age : 10,
// }

// var stu2: Student = {
//     name : '이름2',
//     age : 20,
//     nickname : 'student2'
// }

// interface Shape {
//     width: number;
//     getLength(): number;
// }

// class Square implements Shape {
//     width: number;
//     height : number; // 클래스는 확장을 해도 에러 ❌
//     getLength() : number {
//         return 0;
//     }
// }

// // 클래스
// /*
// class 클래스이름 {
//     변수명1 : 타입;
//     constructor(변수명 : 타입, 변수명 : 타입) {
//         this.변수명1 = 변수명;
//     }
// }
// */
// interface Developer {
//     name : string;
//     getName() : string;
// }
// class Developer1 implements Developer {
//     readonly name : string; // 변경 불가한 값
//     constructor(name : string) {
//         this.name = name;
//     }
//     getName() : string {
//         return this.name;
//     }
// }
// var dev1 = new Developer1("새싹");
// // dev1.name = 'SeSAC';
// console.log(dev1.getName());

// class Developer2 {
//     constructor( readonly name : string) {}
//     getName() : string {
//         return this.name;
//     }
// }
// var dev2 = new Developer2("새싹2");
// console.log(dev2.getName());

// var abc = 1;
// console.log(typeof(abc));

// // 타입 검사
// // primitive type => typeof
// // object type => instanceof
// if (dev2 instanceof Developer2) {

// }


// // 제네릭 (Generics)
// // 재사용성을 높이기 위해서 
// // Array<number> = number[]
// // Array<>
// // const [age, setAge] = useState<number>(0)

// function getText<S>(text:S) : S {
//     return text;
// }
// getText<number>(1);
// getText<string>('a');
// getText(1); // 굳이 제네릭을 쓰지 않아도 됨