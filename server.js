const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get('/api/pokemon', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('pokemon');
    const pokemon = await collection.find().toArray();
    res.json(pokemon);
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/abilities', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('abilities');
    const abilities = await collection.find().toArray();
    res.json(abilities);
  } catch (error) {
    console.error('Error fetching abilities data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/moves', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('moves');
    const moves = await collection.find().toArray();
    res.json(moves);
  } catch (error) {
    console.error('Error fetching moves data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/types', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('types');
    const types = await collection.find().toArray();
    res.json(types);
  } catch (error) {
    console.error('Error fetching types data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
