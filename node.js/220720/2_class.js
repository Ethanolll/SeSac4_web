// class Cat {
//     constructor( name ){
//         this.name = name; // this는 클래스 자체를 의미한다. 
//     }
//     mew() {
//         console.log(this.name + "야옹");
//     }
// }

const { mkdir } = require("fs");

// var cat1 = new Cat("나비");
// var cat2 = new Cat("냥이");
// console.log(cat1);
// cat1.mew();
// cat2.mew();

class Car {
    constructor( color){
        this.color = color;
        this.isWhell = true;
        this.isDoor = true;
    }

    go(){
        console.log("전진");
    }
    back(){
        console.log("후진");
    }
    returnColor(){
        return this.color;
    }
};

module.exports = { Car };

// mkdir
// rename