/* 
    function 함수이름 (변수명:타입) : 반환타입 {} 
*/

// const testfunction = () => {
//     return 'test';
// }
// console.log(testfunction());


// function sum1(a, b) {
//     return a + b;
// }
// console.log(sum1(1, 'a'));
// console.log(sum1(1, null)); // 안보내더라도 null이나 undefined를 보내야함

// function sum2(a: number, b: number) : number {
//     return a + b;
// }
// console.log(sum2(1, 2));

// function sum3(a: number, b?:number) {
//     return a + b;
// }
// console.log('sum3 : ', sum3(1));

// ES2015 - 최근 문법을 작성해도 옛날환경에서 동작함
const func1 = () : void => {
    console.log('func1');
}
const func2 = function(){
    console.log("func2");
}

function sum1(a:number, b:number) : number {
    return 1;
}

let person = {name: '코딩온', age: 10};
function getInfo(obj:{name:string, age:number}){

}
interface PersonData {
    readonly name: string;
    age : number;
    nickname ?: string;
}
function getInfo2(obj: PersonData) {

}
let person2: PersonData = {name:'코딩온', age: 10};
person2.age = person2.age + 1;
// readonly를 지정할 경우 읽기 전용이 되어 수정 불가
// person2.name = "dd"; 

interface login {
    (id : string, pw:string):boolean
};

let loginUser : login = (id, pw) => {
    return true;
}

interface Book {
    title : string;
    getInfo(): void;
    changeTitle(newTitle: string): void;
}
class MyBook implements Book {
    title = '책';
    date = '2022-1205';
    getInfo(){
        console.log("정보");
    }
    changeTitle(newTitle: string): void {
        
    }
}