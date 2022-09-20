const Join = require('../model/Join');
// model의 정보 불러오기
exports.join = async (req,res) => {
    Join.get_joins(function(result){
        console.log('result : ',result);
        console.log('index');
        res.render('index', {data: result});
        // model 에서 받아온 result(sql data)를 render해줌
    });
}
exports.post_comment = (req,res) => {
    console.log(req.body);
    Visitor.insert( req.body.name, req.body.comment, function(result){
        res.send({id: result});
        // 응답을 하면 response의 데이터로 고고
    });
}
exports.get_join = (req, res) => {
    Join.get_join(req.query.id, function(result) {
        console.log( "result : ", result);
        // console.log("result[0] : ", result[0]);
        // res.send( {data: result[0]} );
        res.send( {result: result[0]} );
    })
}

exports.patch_comment = (req, res) => {
  Join.update(req.body, function(result){
    console.log(result);
    res.send("수정 성공");
  });
}

exports.delete_comment = (req, res) => {
  Join.delete(req.body.id, function(result){
    console.log(result);
    res.send("삭제 성공");
  });
}