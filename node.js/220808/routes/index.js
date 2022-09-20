const express = require('express');
const router = express.Router();
const join = require('../controller/JoinController');
router.get('/', join.join);
router.post('/write', join.post_comment);
// 방명록 수정 경로
router.get('/get', join.get_join);
// 수정
router.patch("/edit", join.patch_comment);
// 삭제
router.delete("/delete", join.delete_comment);

module.exports = router;
