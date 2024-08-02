const express = require("express");
const { sequelize } = require("./config/database");
const pokemonRoutes = require("./routes/pokemonRoutes");
const catchRoutes = require("./routes/catchRoutes");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Routes
app.use("/pokemon", pokemonRoutes);
app.use("/catch", catchRoutes);

module.exports = app;
