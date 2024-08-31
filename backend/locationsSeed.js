const mongoose = require('mongoose');
const Location = require('./models/location'); // Adjust the path to your model

mongoose.connect('mongodb://localhost:27017/dataCenters', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedLocations = [
  {
    name: 'California, USA',
    latitude: 36.7783,
    longitude: -119.4179,
    renewableEnergy: true,
    climateConditions: 'cool',
    waterSupply: true,
    lowCarbonEmission: true,
    otherFactors: 'Proximity to solar and wind farms',
  },
  {
    name: 'Gujarat, India',
    latitude: 22.2587,
    longitude: 71.1924,
    renewableEnergy: true,
    climateConditions: 'moderate',
    waterSupply: true,
    lowCarbonEmission: true,
    otherFactors: 'High solar energy potential',
  },
  {
    name: 'Tamil Nadu, India',
    latitude: 11.1271,
    longitude: 78.6569,
    renewableEnergy: true,
    climateConditions: 'warm',
    waterSupply: true,
    lowCarbonEmission: true,
    otherFactors: 'Significant wind energy resources',
  },
  {
    name: 'Rajasthan, India',
    latitude: 27.0238,
    longitude: 74.2179,
    renewableEnergy: true,
    climateConditions: 'dry',
    waterSupply: false,
    lowCarbonEmission: true,
    otherFactors: 'Vast solar energy potential',
  },
  {
    name: 'Karnataka, India',
    latitude: 15.3173,
    longitude: 75.7139,
    renewableEnergy: true,
    climateConditions: 'moderate',
    waterSupply: true,
    lowCarbonEmission: true,
    otherFactors: 'Hydropower availability and solar potential',
  },
  {
    name: 'Maharashtra, India',
    latitude: 19.7515,
    longitude: 75.7139,
    renewableEnergy: true,
    climateConditions: 'warm',
    waterSupply: true,
    lowCarbonEmission: true,
    otherFactors: 'Wind and solar energy resources',
  },
  {
    name: 'Andhra Pradesh, India',
    latitude: 15.9129,
    longitude: 79.7399,
    renewableEnergy: true,
    climateConditions: 'warm',
    waterSupply: true,
    lowCarbonEmission: true,
    otherFactors: 'Solar and wind energy potential',
  },
  {
    name: 'Nord-Pas-de-Calais, France',
    latitude: 50.6292,
    longitude: 3.0573,
    renewableEnergy: true,
    climateConditions: 'cool',
    waterSupply: true,
    lowCarbonEmission: true,
    otherFactors: 'Wind energy-rich region',
  },
  {
    name: 'Rio Grande do Norte, Brazil',
    latitude: -5.7945,
    longitude: -36.5542,
    renewableEnergy: true,
    climateConditions: 'dry',
    waterSupply: false,
    lowCarbonEmission: true,
    otherFactors: 'Strong wind energy resources',
  },
  {
    name: 'Xinjiang, China',
    latitude: 41.1129,
    longitude: 85.2401,
    renewableEnergy: true,
    climateConditions: 'dry',
    waterSupply: false,
    lowCarbonEmission: true,
    otherFactors: 'Vast solar energy potential',
  },
  {
    name: 'Western Cape, South Africa',
    latitude: -33.9249,
    longitude: 18.4241,
    renewableEnergy: true,
    climateConditions: 'moderate',
    waterSupply: true,
    lowCarbonEmission: true,
    otherFactors: 'Proximity to wind farms',
  },
  {
    name: 'Ontario, Canada',
    latitude: 51.2538,
    longitude: -85.3232,
    renewableEnergy: true,
    climateConditions: 'cool',
    waterSupply: true,
    lowCarbonEmission: true,
    otherFactors: 'Hydropower availability',
  },
  {
    name: 'Tasmania, Australia',
    latitude: -41.4545,
    longitude: 145.9707,
    renewableEnergy: true,
    climateConditions: 'cool',
    waterSupply: true,
    lowCarbonEmission: true,
    otherFactors: 'High hydropower potential',
  },
];

Location.insertMany(seedLocations)
  .then(() => {
    console.log('Seed data added');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error(error);
    mongoose.connection.close();
  });
