const express = require('express');
const app = express();
const connectToDatabase = require('./db'); 
const pokemonRoutes = require('./api/index'); 
app.get("/", (req, res) => {
    res.send("Bienvenue sur la partie back du simulateur Pokémon !");
});

const PORT = 3001;

connectToDatabase()
    .then(() => {
        app.use('/api', pokemonRoutes);
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log(`Connected to MongoDB`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
