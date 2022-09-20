var express = require("express");
const { send } = require("process");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    console.log("client");
    res.sendFile(__dirname + "/chat.html");
});

// io -> 클라이언트와의 모든 연결을 갖고 있는 친구
// socket -> 클라이언트 한 명. socket.id 클라이언트를 구분하는 식별자
var list = {};
io.on("connection", function(socket){
    console.log("connected : ", socket.id);
    socket.on("info2", function(data){
        list[socket.id] = data.nickname;
        io.emit("notice", data.nickname + "님이 입장하셨습니다.");
        io.emit("list", list);
    });
    // socket.emit("info", socket.id);
    socket.on("send", function(data){
        // data = {msg: "", to: ""};
        console.log("client message : ", data.msg);
        data["is_dm"] = false;
        data["nickname"] = list[socket.id];
        if(data.to == "전체") {
            io.emit("newMessage", data);
        } else {
            data["is_dm"] = true;
            // data.to = "2";
            // list = { a : "1", b : "2", c : "3" }; 이 상태면 data.to와 일치하는 b가 나옴
            let socketID = Object.keys(list).find( (key) => {return list[key] === data.to; } );
            // (key => list[key] === data.to) -> return 쓰지 않으면 괄호를 다 빼야함, ;도 빼야함
            io.to(socketID).emit("newMessage", data);
            socket.emit("newMessage", data)
        }
    });

    socket.on("disconnect", function(){
        io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
        delete list[socket.id]; // 딕셔너리 형태에서 지워줄 때 이런식으로 지워줄 수 있음
    });
});

http.listen(8000, function(){
    console.log("Server port : ", 8000);
})