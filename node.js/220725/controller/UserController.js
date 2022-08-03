exports.get_user = (req, res) => {
    console.log( req );
    console.log( req.query );
    res.render("receive", req.query);
}

exports.post_user = (req, res) => {
    console.log( req.body );
    res.render("receive", req.body);
}

module.exports = router;
