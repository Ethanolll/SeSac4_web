// const { exec } = require("child_process");

const fs = require("fs").promises;

// callback 상태
// fs.readFile("./test.txt", function(err, data){
//     if (err) throw err;
    
//     console.log(data);

//     console.log(data.toString());
// });

// promise
// fs.readFile("./test.txt")
//     .then((data) => {
//         console.log(data);
//         console.log(data.toString());
//     })
//     .catch((err)=> {
//         console.error(err);
//     });

// 파일 만들기
// fs.writeFile('./write.txt', '안녕')
//     .then(()=>{
//         console.log("작성 완료");
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// 파일 복사하기 
// fs.copyFile("./write.txt", "./new.txt")
//     .then(() => {
//         console.log("복사완료");
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// 이때 child_process 주석처리 나머진 주석처리❌
async function exec() {
    await fs.writeFile("./write.txt", "안녕");
    await fs.copyFile("./write.txt", "./new2.txt");
}
exec();