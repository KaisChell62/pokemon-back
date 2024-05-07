// index.js dans le dossier api

const express = require('express');
const router = express.Router();

router.get("/pokemon", (req, res) => {
    res.send("Route pour récupérer des données Pokémon");
});

router.get("/abilities", (req, res) => {
    res.send("Route pour récupérer des données Abilities");
});

router.get("/moves", (req, res) => {
    res.send("Route pour récupérer des données Moves");
});

router.get("/types", (req, res) => {
    res.send("Route pour récupérer des données Types");
});

module.exports = router;
