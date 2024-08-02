const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pokemon", "pokemon", "pokemon", {
  host: "localhost",
  dialect: "postgres", // or 'postgres', 'sqlite', 'mariadb', etc.
});

module.exports = {
  sequelize,
  development: {
    username: "pokemon",
    password: "pokemon",
    database: "pokemon",
    host: "localhost",
    dialect: "postgres",
  },
  test: {
    username: "pokemon",
    password: "pokemon",
    database: "pokemon_test",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: "pokemon",
    password: "pokemon",
    database: "pokemon_production",
    host: "localhost",
    dialect: "postgres",
  },
};
