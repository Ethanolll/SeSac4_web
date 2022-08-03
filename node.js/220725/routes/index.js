const express = require("express");
const router = express.Router();
const user = require("../controller/UserController");

router.get("/", function(req,res){
    res.render("index");
});

router.get("/receive", user.get_user);

router.post("/receive", user.post_user);

    //res.render("receive", { a:1, b:2 });

module.exports = router; // 내보내짐