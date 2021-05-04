const Sequelize = require("sequelize");
const connection = new Sequelize("guiaperguntas", "rugalo", "celenita1", {
  host: "localhost",
  dialect: "mysql",
});


module.exports = connection;