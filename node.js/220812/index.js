const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.use(cookieParser("1234"));
app.use(session({
    secret: 'secret key',
    // resave: false,
    // saveUninitialized: true, // session이 초기값이 처음에 설정하지 않아도 미리 session을 만들어 놓음 
}))

app.get("/login", (req, res) => {
    res.render("login");
});
app.post("/login", (req, res) => {
    var flag = true;
    if (flag) {
        req.session.id = req.body.id;
        res.redirect("/profile");
    } else res.redirect("/login");
});
app.get("/profile", (req, res) => {
    if (req.session.id == indefined || req.session.id == "") {
        res.redirect("/login");
        return false;
    }

    // req.session.id로 작업
    res.render("profile");
})

app.get("main", (req, res) => {

})

const cookieConfig = { // cookie 부분
    maxAge: 30000,
    path: '/',
    httpOnly: true, 
    signed: true, // 암호화하고 싶을 때 사용
}

app.get("/", (req, res) => {
    req.session.name = "홍길동";
    res.cookie("key", "value", cookieConfig);
    res.cookie("key2", "value2", cookieConfig);
    res.render("index");
});

app.get("/get", (req, res) => {
    console.log(req.session.name);
    console.log(req.cookies);
    res.send(req.cookies);
})
app.get("/cookie", (req, res) => {
    res.render("cookie");
})
app.get("/destroy", (req, res) => { // session 삭제
    // res.render("cookie");
    req.session.destroy(function(err){
        res.send("삭제");
    })
    req.session.name = ""; // 일부 삭제
})

app.listen(8000, () => {
    console.log("Server : ", 8000);
})