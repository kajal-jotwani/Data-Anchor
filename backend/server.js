const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Location = require('./models/location'); // Import the Location model
const incentive = require('./models/incentive');
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
// API endpoints for Incentives
app.post('/incentives', async (req, res) => {
  try {
    const incentive = new Incentive(req.body);
    await incentive.save();
    res.status(201).send(incentive);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/incentives', async (req, res) => {
  try {
    const incentives = await Incentive.find();
    res.status(200).send(incentives);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/incentives/:id', async (req, res) => {
  try {
    const incentive = await Incentive.findById(req.params.id);
    if (!incentive) {
      return res.status(404).send();
    }
    res.status(200).send(incentive);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/incentives/:id', async (req, res) => {
  try {
    const incentive = await Incentive.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!incentive) {
      return res.status(404).send();
    }
    res.status(200).send(incentive);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete('/incentives/:id', async (req, res) => {
  try {
    const incentive = await Incentive.findByIdAndDelete(req.params.id);
    if (!incentive) {
      return res.status(404).send();
    }
    res.status(200).send(incentive);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API endpoint for Subscription
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Incentive Tracker Subscription',
    text: 'Thank you for subscribing to our Incentives and Subsidy Tracker. You will receive alerts about new incentives and policy changes.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Subscription failed' });
    }
    res.json({ message: 'Subscription successful' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
