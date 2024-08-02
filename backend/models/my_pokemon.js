const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Pokemon = require("./pokemon");

// Define the MyPokemon model
const MyPokemon = sequelize.define("MyPokemons", {
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
  pokemonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pokemon,
      key: "id",
    },
  },
});

Pokemon.hasMany(MyPokemon, { foreignKey: "pokemonId" });
MyPokemon.belongsTo(Pokemon, { foreignKey: "pokemonId" });

module.exports = MyPokemon;
