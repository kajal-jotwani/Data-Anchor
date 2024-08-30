const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  renewableEnergy: {
    type: Boolean,
    required: true,
  },
  climateConditions: {
    type: String, // e.g., "cool", "moderate", "dry"
    required: true,
  },
  waterSupply: {
    type: Boolean,
    required: true,
  },
  lowCarbonEmission: {
    type: Boolean,
    required: true,
  },
  otherFactors: {
    type: String, // Additional factors such as proximity to renewable energy sources, etc.
  },
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
