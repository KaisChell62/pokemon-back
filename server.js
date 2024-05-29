require('dotenv').config();  // Import et configuration de dotenv
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDatabase = require('./db'); 
const pokemonRoutes = require('./api/index'); 

// Configuration de l'autorisation des requêtes CORS
app.use(cors({
  origin: 'https://simulateur-pokemon-3vbvus144-chelhaouis-projects.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Si vous utilisez des cookies
  optionsSuccessStatus: 204
}));

// Route pour la racine du serveur
app.get("/", (req, res) => {
    res.send("Bienvenue sur la partie back du simulateur Pokémon !");
});

// Utiliser la variable d'environnement pour le port
const PORT = process.env.PORT || 3001;

// Connexion à la base de données MongoDB au démarrage du serveur
connectToDatabase()
    .then(() => {
        // Montage des routes Pokémon
        app.use('/api', pokemonRoutes);
        
        // Démarrage du serveur
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log(`Connected to MongoDB`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
