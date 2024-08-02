const express = require("express");
const router = express.Router();
const MyPokemon = require("../models/my_pokemon");
const { isPrime, getFibonacci } = require("./../utils"); // Assuming these utility functions are defined in utils.js
const Pokemon = require("../models/pokemon");

// Helper function to get a random probability
const getProbability = () => Math.random() < 0.5;

// REST API to catch Pokemon
router.get("/probability", (req, res) => {
  try {
    const caught = getProbability();
    res.json({ caught });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// REST API to release Pokemon
router.get("/release", (req, res) => {
  try {
    const number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

    if (isPrime(number)) {
      res.json({ number, success: true });
    } else {
      res.json({ number, success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// REST API to rename Pokemon
router.post("/rename", async (req, res) => {
  try {
    // 1. Get parameters
    const { name, pokemonId } = req.body;
    console.log(name, pokemonId);

    // 2. Check if Pokemon exists
    const pokemon = await Pokemon.findOne({
      where: {
        id: pokemonId,
      },
    });

    if (!pokemon) {
      return res.status(404).json({ message: "Pokemon not found" });
    }

    // 3. Count MyPokemon entries with the same pokemonId
    const count = await MyPokemon.count({
      where: {
        pokemonId: pokemonId,
      },
    });

    // Calculate Fibonacci number
    const fib = count === 0 ? 0 : getFibonacci(count);

    // Create new MyPokemon entry
    const newPokemon = await MyPokemon.create({
      name: `${name} ${pokemon.name}-${fib}`,
      pokemonId: pokemonId,
    });

    res.json({ newPokemon });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
