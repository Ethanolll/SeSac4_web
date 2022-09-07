const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

// const a = require("../config/config.json");
// const a = {
//    "development" : {"host" :localhost ~~~ },
//    "production" :}
//      }
// const config = a["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// const a = require("./Visitor");
// const b = a(sequilize, Sequielize)
// db = { "sequelize": sequelize, "Sequelize" : Sequelize};

module.exports = db;

// // 나는 다른 파일
// const {sequelize} = require("./model");
