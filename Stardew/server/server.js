/*
const items = [
  { 
      id: 1, 
      title: 'Mutant Carp', 
      description: 'The strange waters of the sewer turned this carp into a monstrosity.', 
      img: 'images/Mutant_Carp.png', 
      difficulty: 80, 
      location: 'Sewers'
  },
  { 
      id: 2, 
      title: 'Glacierfish', 
      description: 'Builds a nest on the underside of glaciers.', 
      img: 'images/Glacierfish.png', 
      difficulty: 100, 
      location: 'Cindersap Forest (Winter)'
  },
  { 
      id: 3, 
      title: 'Legend', 
      description: "The king of all fish! They said he'd never be caught.", 
      img: 'images/Legend.png', 
      difficulty: 110, 
      location: 'Mountain Lake (Spring)'
  },
  { 
      id: 4, 
      title: 'Angler', 
      description: 'Uses a bioluminescent dangler to attract prey.', 
      img: 'images/Angler.png', 
      difficulty: 85, 
      location: 'The River (North of JojaMart, Fall)'
  },
  { 
      id: 5, 
      title: 'Crimsonfish', 
      description: 'Lives deep in the ocean but likes to lay its eggs in the warm summer water.', 
      img: 'images/Crimsonfish.png', 
      difficulty: 95, 
      location: 'East Pier on the Beach (Summer)'
  }
];
*/

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/db');
require('dotenv').config();

app.use(express.static('public'));
app.use(cors());

app.get('/cards', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM fish");
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching cards from database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use((req, res) => {
  res.status(404).send("404 error");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});