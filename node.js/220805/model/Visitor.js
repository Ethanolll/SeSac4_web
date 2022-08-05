const mysql = require("mysql");
const cnn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "",
  database: "sesac2",
});

exports.get_visitors = (cb) => {
  cnn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) throw err;
    console.log(rows);
    cb(rows);
  });
};

exports.insert = (name, comment, cb) => {
  var sql =
    "INSERT INTO visitor(name, comment) VALUES('" +
    name +
    "', '" +
    comment +
    "')";
  cnn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log(rows);
    cb(rows.insertId);
  });
};
