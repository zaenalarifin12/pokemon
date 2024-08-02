const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

// Define the Pokemon model
const Pokemon = sequelize.define("Pokemons", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pictureUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  moves: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Pokemon;
