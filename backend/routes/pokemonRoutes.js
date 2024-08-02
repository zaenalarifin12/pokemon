const express = require("express");
const router = express.Router();
const Pokemon = require("../models/pokemon");
const MyPokemon = require("../models/my_pokemon");

// Helper function to get a random probability

router.get("/list", async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/me", async (req, res) => {
  try {
    const mypokemons = await MyPokemon.findAll({
      include: Pokemon,
      order: [["id", "DESC"]],
    });

    let result = mypokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.Pokemon.type,
      pictureUrl: pokemon.Pokemon.pictureUrl,
      moves: JSON.stringify(pokemon.Pokemon.moves),
      pokemonId: pokemon.Pokemon.id,
    }));

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to get a Pokémon by ID
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const pokemon = await Pokemon.findByPk(id);

    if (!pokemon) {
      return res.status(404).json({ message: "Pokémon not found" });
    }

    res.json(pokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to get a Pokémon by ID
router.get("/me/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const pokemon = await MyPokemon.findOne({
      where: { id }, // Make sure `id` is defined
      include: Pokemon,
    });

    let result = {
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.Pokemon.type,
      pictureUrl: pokemon.Pokemon.pictureUrl,
      moves: pokemon.Pokemon.moves,
      pokemonId: pokemon.Pokemon.id,
    };

    if (!pokemon) {
      return res.status(404).json({ message: "Pokémon not found" });
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
