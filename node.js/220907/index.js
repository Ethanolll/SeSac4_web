var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    console.log("client");
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket){
    console.log("connected");
    socket.emit("hello", "server hello");
    socket.on("btnClick", function(data){
        console.log("client click");
        socket.emit("clickResponse", "success");
        io.emit("clickResponse", "io success"); // io는 전체를 관리함
    })
    socket.on("clickHello", function(data){
        console.log("client : ", data);
        socket.emit("response", "hello : 안녕하세요?")
    })
    socket.on("clickStudy", function(data){
        console.log("client : ", data);
        socket.emit("response", "study : 공부합시다~")
    })
    socket.on("clickBye", function(data) {
        console.log("client : ", data);
        socket.emit("response", "bye : 안녕히가세요!")
    })
});

http.listen(8000, function(){
    console.log("Server port : ", 8000);
});