require('dotenv').config();  // Importer et configurer dotenv pour utiliser les variables d'environnement

const { MongoClient } = require('mongodb');

// Utiliser les variables d'environnement pour l'URL et le nom de la base de données
const url = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(url);

async function connectToDatabase() {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName);
}

module.exports = connectToDatabase;
