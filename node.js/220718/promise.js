const func1 = new Promise((resolve, reject) => {
    var flag = true;
    if (flag) resolve("성공"); // 성공할 때 실행하는 함수
    else reject("실패"); // 실패할 때 실행하는 함수
})

// const func1 = new Promise((resolve, reject) {
//     var flag = true;
//     if (flag) resolve("성공"); // 성공할 때 실행하는 함수
//     else reject("실패"); // 실패할 때 실행하는 함수
// })

func1.then(value => {
    return value + "1";
}).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});
// then -> 성공
// catch -> 실패

// func1.then(function (value) {
//     return value + "1";
// }).then(function (result) {
//     console.log(result);
// });