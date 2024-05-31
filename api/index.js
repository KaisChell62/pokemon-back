const express = require('express');
const connectToDatabase = require('../db'); 
const router = express.Router();

// Route pour récupérer des données Pokémon
router.get("/pokemon", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('pokemon'); 
        const result = await collection.find({}).toArray();
        res.json(result); 
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route pour récupérer des données Abilities
router.get("/abilities", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('abilities'); 
        const result = await collection.find({}).toArray();
        res.json(result); 
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route pour récupérer des données Moves
router.get("/moves", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('moves');
        const result = await collection.find({}).toArray();
        res.json(result); 
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route pour récupérer des données Types
router.get("/types", async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('types'); 
        const result = await collection.find({}).toArray();
        res.json(result); 
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
