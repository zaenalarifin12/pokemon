"use strict";
// const Pokemon = require("../models/pokemon");

const pokemonData = [
  {
    name: "Bulbasaur",
    type: "Grass/Poison",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    moves: ["Tackle", "Growl", "Leech Seed", "Vine Whip"],
  },
  {
    name: "Ivysaur",
    type: "Grass/Poison",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    moves: ["Tackle", "Growl", "Leech Seed", "Vine Whip", "Poison Powder"],
  },
  {
    name: "Venusaur",
    type: "Grass/Poison",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    moves: [
      "Tackle",
      "Growl",
      "Leech Seed",
      "Vine Whip",
      "Poison Powder",
      "Razor Leaf",
    ],
  },
  {
    name: "Charmander",
    type: "Fire",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    moves: ["Scratch", "Growl", "Ember", "Leer"],
  },
  {
    name: "Charmeleon",
    type: "Fire",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    moves: ["Scratch", "Growl", "Ember", "Leer", "Rage"],
  },
  {
    name: "Charizard",
    type: "Fire/Flying",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    moves: ["Scratch", "Growl", "Ember", "Leer", "Rage", "Fly"],
  },
  {
    name: "Squirtle",
    type: "Water",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    moves: ["Tackle", "Tail Whip", "Bubble", "Water Gun"],
  },
  {
    name: "Wartortle",
    type: "Water",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    moves: ["Tackle", "Tail Whip", "Bubble", "Water Gun", "Bite"],
  },
  {
    name: "Blastoise",
    type: "Water",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    moves: ["Tackle", "Tail Whip", "Bubble", "Water Gun", "Bite", "Hydro Pump"],
  },
  {
    name: "Caterpie",
    type: "Bug",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    moves: ["Tackle", "String Shot"],
  },
  {
    name: "Metapod",
    type: "Bug",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    moves: ["Tackle", "Harden"],
  },
  {
    name: "Butterfree",
    type: "Bug/Flying",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    moves: ["Tackle", "Harden", "Confusion", "Sleep Powder"],
  },
  {
    name: "Pidgey",
    type: "Normal/Flying",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    moves: ["Tackle", "Growl", "Sand Attack", "Gust"],
  },
  {
    name: "Pidgeotto",
    type: "Normal/Flying",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    moves: ["Tackle", "Growl", "Sand Attack", "Gust", "Quick Attack"],
  },
  {
    name: "Pidgeot",
    type: "Normal/Flying",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    moves: [
      "Tackle",
      "Growl",
      "Sand Attack",
      "Gust",
      "Quick Attack",
      "Wing Attack",
    ],
  },
  {
    name: "Rattata",
    type: "Normal",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    moves: ["Tackle", "Tail Whip", "Quick Attack", "Hyper Fang"],
  },
  {
    name: "Raticate",
    type: "Normal",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    moves: ["Tackle", "Tail Whip", "Quick Attack", "Hyper Fang", "Super Fang"],
  },
  {
    name: "Jigglypuff",
    type: "Normal/Fairy",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    moves: ["Sing", "Pound", "Defense Curl", "Disable"],
  },
  {
    name: "Wigglytuff",
    type: "Normal/Fairy",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    moves: ["Sing", "Pound", "Defense Curl", "Disable", "Dazzling Gleam"],
  },
  {
    name: "Zubat",
    type: "Poison/Flying",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    moves: ["Leech Life", "Supersonic", "Bite", "Confuse Ray"],
  },
  {
    name: "Golbat",
    type: "Poison/Flying",
    pictureUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    moves: ["Leech Life", "Supersonic", "Bite", "Confuse Ray", "Air Cutter"],
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pokemons", // Ensure this matches the table name in the database
      pokemonData.map((pokemon) => ({
        name: pokemon.name,
        type: pokemon.type,
        pictureUrl: pokemon.pictureUrl,
        moves: JSON.stringify(pokemon.moves), // Serialize moves array to a string
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pokemons', null, {});
  },
};
