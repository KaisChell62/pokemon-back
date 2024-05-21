// api/index.js

const express = require('express');
const connectToDatabase = require('../db'); // Assure-toi que le chemin vers db.js est correct
const router = express.Router();

// Route pour récupérer des données Pokémon
router.get("/pokemon", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('pokemon'); // Nom de la collection "pokemon"
        const result = await collection.find({}).toArray();
        res.json(result); // Renvoyer les données Pokémon sous forme JSON
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route pour récupérer des données Abilities
router.get("/abilities", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('abilities'); // Nom de la collection "abilities"
        const result = await collection.find({}).toArray();
        res.json(result); // Renvoyer les données Abilities sous forme JSON
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route pour récupérer des données Moves
router.get("/moves", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('moves'); // Nom de la collection "moves"
        const result = await collection.find({}).toArray();
        res.json(result); // Renvoyer les données Moves sous forme JSON
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route pour récupérer des données Types
router.get("/types", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('types'); // Nom de la collection "types"
        const result = await collection.find({}).toArray();
        res.json(result); // Renvoyer les données Types sous forme JSON
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route pour la racine du serveur
router.get("/", (req, res) => {
    res.send("Bienvenue sur la partie back du simulateur Pokémon !");
});

module.exports = router;
