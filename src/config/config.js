require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    port: process.env.PORT_DB,
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
