const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Location = require('./models/location'); // Import the Location model
const cors = require('cors'); 

// Initialize the app
const app = express();
const port = 5000;


// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/dataCenters', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API endpoints
// Create a new location
app.post('/locations', async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).send(location);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all locations or search locations by name
app.get('/locations', async (req, res) => {
  try {
    const { name } = req.query;
    const query = name ? { name: new RegExp(name, 'i') } : {};
    const locations = await Location.find(query);
    res.status(200).send(locations);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Get a specific location by ID
app.get('/locations/:id', async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).send();
    }
    res.status(200).send(location);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a location by ID
app.patch('/locations/:id', async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!location) {
      return res.status(404).send();
    }
    res.status(200).send(location);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a location by ID
app.delete('/locations/:id', async (req, res) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) {
      return res.status(404).send();
    }
    res.status(200).send(location);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
