const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://kaischelhaoui:W5E9UFJ5KAlJ7O6N@cluster0.u8g3wve.mongodb.net/';
const dbName = 'db1'; 

const client = new MongoClient(url);

async function connectToDatabase() {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName);
}

module.exports = connectToDatabase;
