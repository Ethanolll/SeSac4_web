// : 타임 표기 (Type Annotation)
let str : string = 'hi';

let num : number = 1;

let flag : boolean = true;

let age : number | string; // union 설정
age = 10; // 숫자가 넣어도 
age = 'a'; // 문자가 넣어도 에러 발생 ❌

let any: any; // 어떤 것이든 상관 ❌

// Array
let arr1 : number[] = [1, 2, 3, 4, 5];
let arr2 : string[] = ['a', 'b', 'c', 'd'];
let arr3 : Array<number> = [1, 2, 3, 4, 5];

// Tuple 
let arr4: [string, number] = ['str', 1]; // 타입이 지정됨 
// concat()은 문자를 연결하는 것 
arr4[0].concat() 
// arr4[1].concat() // number type엔 쓸 수 없음

// Enum 
enum Names {홍길동, 코딩온, 새싹};
let name1 : Names = Names.홍길동;
name1 = Names.코딩온;

// void 
// 함수 : 반환값이 없는 친구 / 변수 : undefined와 null만 들어갈 수 있다. 
let void1 : void = undefined;
function void2(): void {
    console.log('11');
}

// never 
// 함수에 사용. 함수의 끝에 절대 도달하지 않는다 
// function neverEnd(): never{
//     while(true){

//     }
// }

let test: any; // 모든 타입 허용
test = 1;
test = [1, 2, 3];

let test2 : object; // 기본타입을 제외한 나머지 모두 (array, tuple 등)
test2 = 1;
test2 = [1, 2, 3];