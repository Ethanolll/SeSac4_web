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
const func1 = () => {
    console.log('func1');
};
const func2 = function () {
    console.log("func2");
};
function sum1(a, b) {
    return 1;
}
let person = { name: '코딩온', age: 10 };
function getInfo(obj) {
}
function getInfo2(obj) {
}
let person2 = { name: '코딩온', age: 10 };
person2.age = person2.age + 1;
;
let loginUser = (id, pw) => {
    return true;
};
class MyBook {
    constructor() {
        this.title = '책';
        this.date = '2022-1205';
    }
    getInfo() {
        console.log("정보");
    }
    changeTitle(newTitle) {
    }
}
